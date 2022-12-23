import jsSHA from "jssha/dist/sha256";
import { browser } from "$app/environment";
import { get, writable, type Writable } from "svelte/store";

export const root: Writable<PlayGraphNode | null> = writable(null);

export const selectedNode: Writable<PlayGraphNode | null> = writable(null);

const selectTargetNode = (node: PlayGraphNode, target: string) : PlayGraphNode => {
    if (node.hash_id === target) {
        return {
            ...node,
            selected: true
        };
    } 
    const children = node.children.map((c) => selectTargetNode(c, target));
    return {
        ...node,
        selected: children.some((c) => c.selected),
        children 
    }
}

const updateTargetNode = (node: PlayGraphNode, update: PlayGraphNode) : PlayGraphNode => {
    if (node.hash_id === update.hash_id) return update;
    else return {
        ...node,
        children: node.children.map((c) => updateTargetNode(c, update))
    }
}

const findTargetNode = (node: PlayGraphNode | null, target: string) : PlayGraphNode | null => {
    if (!node) return null;
    if (node.hash_id === target) return node;
    if (node.children.length === 0) return null;
    const searchSubTrees = node.children.map((c) => findTargetNode(c, target));
    return searchSubTrees.find((v) => v) || null;
}

if (browser && window) {
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash;
        const path = hash.split("_");
        if (path[0] !== "#goto") return;
        // test if the target node exists
        const target = findTargetNode(get(root), path[1]);
        if (!target) return;
        // if exists then clear selected and select target node
        root.update((v) => !v ? v : selectTargetNode(v, path[1]));
        // register a listener to update the target node
        registerListener((v) => root.update((r) => !r ? r : updateTargetNode(r, v)));
        // set the selected node
        selectedNode.set(target);
        window.location.hash = "";
    });
}

export const getSuccessors = (children: PlayGraphNode[]): PlayGraphNode[] => {
    const someSelected = children.find(v => v.selected);
    if (someSelected) return [someSelected];
    return children;
}

export const clearSelected = (children: PlayGraphNode[]): PlayGraphNode[] => {
    return children.map(v => ({
        ...v,
        selected: false,
        children: clearSelected(v.children)
    }));
}

export const setSelected = (children: PlayGraphNode[], path: number[], root = true): PlayGraphNode[] => {
    const c = root ? clearSelected(children) : children;
    if (path.length === 0) return c;
    return c.map((child, i) => ({
        ...child,
        selected: i === path[0],
        children: i === path[0] ? setSelected(child.children, path.slice(1), false) : child.children
    }));
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
let cb = (node: PlayGraphNode) => { node };

export const registerListener = (callback: (x: PlayGraphNode) => void) => {
    cb = callback;
}

selectedNode.subscribe(v => {
    if (v) cb(v);
});

const trimNewLines = (desc : string) => desc.replace(/((?:\r\n?$|\n$){2,})/gm, "\n")

selectedNode.subscribe((v) => {
    if (!v) return;
    const description = trimNewLines(v.description);
    if (v.description === description) return;
    selectedNode.set({
        ...v,
        description,
    });
});

export const generateHash = (index : number) => (new jsSHA("SHA-256", "TEXT"))
    .update(`${index}_${Date.now()}_${Math.random()}`)
    .getHash("HEX").slice(0, 8);

export const branchContainsHash = (children : PlayGraphNode[], query : string) : number => {
    const index = children.findIndex((child) => child.hash_id === query);
    if (index > -1) return index;
    return children.findIndex((child) => branchContainsHash(child.children, query) > -1);
};

const getLinks = (description: string, invalidOnly = false) : string[] => {
    const linkRegex = (new RegExp(/\[.*\]\(#goto_(.+?)\)/g));
    const matches = description.matchAll(linkRegex);
    const hashes = Array.from(matches, (match) => match[1]);
    if (!invalidOnly) return hashes;
    const rootNode = get(root);
    const notInTree = hashes.filter((hash) => !findTargetNode(rootNode, hash));
    return notInTree;
}

export const getTodos = (node : PlayGraphNode) : string[] => {
    const todoRegex = (new RegExp(/TODO:(.*)\n?/g));
    const matches = node.description.matchAll(todoRegex);
    return Array.from(matches, (match) => match[1]);
}

export const hasIssue = (node: PlayGraphNode) : string | null => {
    if (node.name === "New Node") return "The node's title has not been changed";
    if (node.description === "Description") return "The node's description has not been changed";
    const invalidLinks = getLinks(node.description, true);
    if (invalidLinks.length > 0) {
        return `Some links in this node point to nodes that no longer exist: ${invalidLinks.join(",")}`;
    }
    return null;
} 