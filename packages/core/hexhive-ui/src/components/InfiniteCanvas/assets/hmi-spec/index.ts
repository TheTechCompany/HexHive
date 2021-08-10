import { UFPlant } from './uf-plant'
import { NFPlant } from './nf-plant'

export interface HMILabel {
    id: string
    label: string;
    x: number;
    y: number;
    width: number;
}

export interface HMINode {
    asset: string;
    x: number;
    y: number;
    label?: string;
    width?: number;
    height?: number;
    value?: string;
    sub_components?: {
        [key: string]: HMINode
    }
}

export interface HMILink{
    source: string;
    target: string;
    points: HMIPosition[]
}

export interface HMIPosition {
    x: number
    y: number
}

export interface HMISpec {
    labels: {
        [key: string]: HMILabel
    }
    nodes: {
        [key: string]: HMINode
    }
    links: {
        [key: string]: HMILink
    }
}

export const HMI : HMISpec = {
    labels: {
        "Feed": {
            "id": "raw-water-feed",
            "label": "Raw water feed",
            "x": 100,
            "y": 290,
            "width": 150
        },
        "UF": {
            "id": "uf-plant",
            "label": "UF Plant",
            "x": 490,
            "y": 250,
            "width": 150
        },
        "NF": {
            "id": "nf-plant",
            "label": "NF Plant",
            "x": 490,
            "y": 600,
            "width": 150
        }
    },
    nodes: {
        ...UFPlant.nodes,
        ...NFPlant.nodes
    },
    links: {
        ...UFPlant.links,
        ...NFPlant.links
    }
}