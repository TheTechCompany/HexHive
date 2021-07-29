export const NFPlant = {
    nodes: {
        "AV301": {
            "asset": "diaphragm-valve",
            "direction": "right-left",
            "x": 800,
            "y": 507,
            "width": 50,
            "height": 30
        },
        "SC301": {
            "asset": "pump",
            "direction": "right-left",
            "x": 600,
            "y": 465,
            "width": 60,
            "height": 80,
            "source": "TK301",
            "target": "output"
        },
        "FIL301": {
            "asset": "nf-membrane",
            "direction": "right-left",
            "x": 500,
            "y": 485,
            "width": 50,
            "height": 50
        },
        "FIT301": {
            "asset": "vortex-flow",
            "direction": "right-left",
            "x": 250,
            "y": 465,
            "width": 50,
            "height": 50
        },
        "AV302": {
            "asset": "diaphragm-valve",
            "direction": "right-left",
            "x": 180,
            "y": 495,
            "width": 40,
            "height": 20
        },
        "PT401": {
            "asset": "pressure-sensor",
            "direction": "left-right",
            "x": 350,
            "y": 565,
            "width": 50,
            "height": 50
        },
        "AV401": {
            "asset": "diaphragm-valve",
            "direction": "right-left",
            "x": 260,
            "y": 535,
            "width": 50,
            "height": 50
        },
        "Clean Water": {
            "asset": "jumper",
            "direction": "left-right",
            "label": "Clean Water",
            "x": 50,
            "y": 475,
            "width": 100,
            "height": 50
        },
        "Balance Tank": {
            "asset": "jumper",
            "direction": "left-right",
            "x": 100,
            "y": 565,
            "label": "Balance Tank",
            "width": 100,
            "height": 50
        },
        "NF Membrane": {
            "asset": "jumper",
            "direction": "left-right",
            "x": 1100,
            "y": 280,
            "label": "NF Membrane",
            "width": 100,
            "height": 50
        },
        "TK601": {
            "asset": "tank",
            "x": 830,
            "y": 610,
            "width": 75,
            "height": 75
        },
        "PMD601": {
            "asset": "dosing-pump",
            "x": 737,
            "y": 625,
            "width": 50,
            "height": 50
        }
    },
    links: {
         "link-8": {
            "source": "TK301",
            "target": "AV301",
            "points": [
                {
                    "x": 950,
                    "y": 460
                },
                {
                    "x": 950,
                    "y": 520
                },
                {
                    "x": 850,
                    "y": 520
                }
            ]
        },
        "link-9": {
            "source": "AV301",
            "target": "SC301",
            "points": [
                {
                    "x": 800,
                    "y": 520
                },
                {
                    "x": 650,
                    "y": 520
                }
            ]
        },
        "link-11": {
            "source": "SC301",
            "target": "FIL301",
            "points": [
                {
                    "x": 610,
                    "y": 510
                },
                {
                    "x": 550,
                    "y": 510
                }
            ]
        },
        "link-12": {
            "source": "FIL301",
            "target": "FIT301",
            "points": [
                {
                    "x": 500,
                    "y": 510
                },
                {
                    "x": 290,
                    "y": 510
                }
            ]
        },
        "link-13": {
            "source": "FIL301",
            "target": "PT401",
            "points": [
                {
                    "x": 500,
                    "y": 510
                },
                {
                    "x": 500,
                    "y": 590
                },
                {
                    "x": 400,
                    "y": 590
                }
            ]
        },
        "link-14": {
            "source": "PT401",
            "target": "AV401",
            "points": [
                {
                    "x": 350,
                    "y": 590
                },
                {
                    "x": 330,
                    "y": 590
                },
                {
                    "x": 330,
                    "y": 560
                },
                {
                    "x": 310,
                    "y": 560
                }
            ]
        },

        "link-16": {
            "source": "Balance Tank",
            "target": "NF Membrane",
            "points": []
        },
        "extra-reclaim-drain": {
            "source": "NF Membrane",
            "target": "AV403",
            "points": [
                {
                    "x": 1100,
                    "y": 305
                },
                {
                    "x": 1070,
                    "y": 305
                },
                {
                    "x": 1070,
                    "y": 340
                }
            ]
        },

        "link-10": {
            "source": "FIT301",
            "target": "AV302",
            "points": [
                {
                    "x": 260,
                    "y": 505
                },
                {
                    "x": 220,
                    "y": 505
                }
            ]
        },
        "output-line": {
            "source": "AV302",
            "target": "Clean Water",
            "points": [
                {
                    "x": 180,
                    "y": 505
                },
                {
                    "x": 150,
                    "y": 505
                }
            ]
        },
          "dosing-link-3": {
            "source": "TK601",
            "target": "PMD601",
            "points": [
                {
                    "x": 830,
                    "y": 670
                },
                {
                    "x": 775,
                    "y": 670
                }
            ]
        },
        "dosing-link-4": {
            "source": "PMD601",
            "target": "SC301",
            "points": [
                {
                    "x": 750,
                    "y": 670
                },
                {
                    "x": 730,
                    "y": 670
                },
                {
                    "x": 730,
                    "y": 520
                }
            ]
        }
    }
}