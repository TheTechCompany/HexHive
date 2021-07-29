export const UFPlant = {
    nodes: {
        "TK101": {
            "asset": "tank",
            "x": 100,
            "y": 150,
            "value": "LT101",
            "sub_components": {
                "SC101": {
                    "asset": "sump",
                    "x": 55,
                    "y": 40,
                    "width": 60,
                    "height": 80,
                    "source": "TK101",
                    "target": "TK201"
                }
            },
            "width": 150,
            "height": 150
        },
        "AV101": {
            "asset": "ball-valve",
            "x": 300,
            "y": 60,
            "width": 30,
            "height": 30
        },
        "FIT101": {
            "asset": "vortex-flow",
            "x": 400,
            "y": 45,
            "width": 50,
            "height": 50
        },
        "TK201": {
            "asset": "tank",
            "x": 480,
            "y": 120,
            "width": 150,
            "height": 150,
            "value": "LT201",
            "sub_components": {
                "MM": {
                    "asset": "membrane",
                    "x": 35,
                    "y": 50,
                    "width": 80,
                    "height": 50
                },
                "BS": {
                    "asset": "blower-sparge",
                    "x": 0,
                    "y": 101,
                    "width": 150,
                    "height": 20
                }
            }
        },
        "BLO701": {
            "asset": "blower",
            "x": 750,
            "y": 150,
            "width": 50,
            "height": 50
        },
        "AV202": {
            "asset": "diaphragm-valve",
            "x": 700,
            "y": 60,
            "width": 50,
            "height": 50
        },
        "SC201": {
            "asset": "pump",
            "x": 870,
            "y": 47,
            "width": 60,
            "height": 80,
            "source": "TK201",
            "target": "TK301"
        },
        "FIT201": {
            "direction": "up-down",
            "asset": "vortex-flow",
            "x": 940,
            "y": 140,
            "width": 50,
            "height": 60
        },
        "TK301": {
            "direction": "left-right",
            "asset": "tank",
            "x": 870,
            "y": 320,
            "width": 150,
            "height": 150,
            "value": "LT301"
        },
        "AV402": {
            "asset": "diaphragm-valve",
            "direction": "right-left",
            "x": 1000,
            "y": 280,
            "width": 50,
            "height": 50
        },
        "AV403": {
            "asset": "diaphragm-valve",
            "direction": "up-down",
            "x": 1043,
            "y": 340,
            "width": 50,
            "height": 50
        },
        "Drain": {
            "asset": "jumper",
            "direction": "down-up",
            "label": "Drain",
            "x": 1030,
            "y": 450,
            "width": 80,
            "height": 50
        },              
        "TK501": {
            "asset": "tank",
            "x": 400,
            "y": -50,
            "width": 75,
            "height": 75
        },
        "PMD501": {
            "asset": "dosing-pump",
            "direction": "right-left",
            "x": 487,
            "y": -40,
            "width": 50,
            "height": 50
        }
    },
    links: {
        "link-1": {
            "source": "TK101",
            "target": "AV101",
            "points": [
                {
                    "x": 175,
                    "y": 190
                },
                {
                    "x": 175,
                    "y": 85
                },
                {
                    "x": 300,
                    "y": 85
                }
            ]
        },
        "link-2": {
            "source": "AV101",
            "target": "FIT101",
            "points": [
                {
                    "x": 330,
                    "y": 85
                },
                {
                    "x": 410,
                    "y": 85
                }
            ]
        },
        "link-3": {
            "source": "FIT101",
            "target": "TK201",
            "points": [
                {
                    "x": 440,
                    "y": 85
                },
                {
                    "x": 520,
                    "y": 85
                },
                {
                    "x": 520,
                    "y": 150
                }
            ]
        },
        "link-4": {
            "source": "TK201",
            "target": "AV202",
            "points": [
                {
                    "x": 590,
                    "y": 175
                },
                {
                    "x": 590,
                    "y": 85
                },
                {
                    "x": 700,
                    "y": 85
                }
            ]
        },
        "link-4-a": {
            "source": "BLO701",
            "target": "TK201",
            "points": [
                {
                    "x": 750,
                    "y": 160
                },
                {
                    "x": 700,
                    "y": 160
                },
                {
                    "x": 700,
                    "y": 120
                },
                {
                    "x": 600,
                    "y": 120
                },
                {
                    "x": 600,
                    "y": 239
                },
                {
                    "y": 239,
                    "x": 590
                }
            ]
        },
        "link-5": {
            "source": "AV202",
            "target": "SC201",
            "points": [
                {
                    "x": 750,
                    "y": 85
                },
                {
                    "x": 870,
                    "y": 85
                }
            ]
        },
        "link-6": {
            "source": "SC201",
            "target": "FIT201",
            "points": [
                {
                    "x": 930,
                    "y": 80
                },
                {
                    "x": 950,
                    "y": 80
                },
                {
                    "x": 950,
                    "y": 150
                }
            ]
        },
        "link-7": {
            "source": "FIT201",
            "target": "TK301",
            "points": [
                {
                    "x": 950,
                    "y": 190
                },
                {
                    "x": 950,
                    "y": 360
                }
            ]
        },
         "link-15": {
            "source": "AV401",
            "target": "Balance Tank",
            "points": [
                {
                    "x": 260,
                    "y": 560
                },
                {
                    "x": 240,
                    "y": 560
                },
                {
                    "x": 240,
                    "y": 590
                },
                {
                    "x": 200,
                    "y": 590
                }
            ]
        },
         "drainage": {
            "source": "AV403",
            "target": "Drain",
            "points": [
                {
                    "x": 1070,
                    "y": 390
                },
                {
                    "x": 1070,
                    "y": 440
                }
            ]
        },
        "extra-reclaim-fill": {
            "source": "NF Membrane",
            "target": "AV402",
            "points": [
                {
                    "x": 1100,
                    "y": 305
                },
                {
                    "x": 1050,
                    "y": 305
                }                
            ]
        },
        "fill-line": {
            "source": "AV402",
            "target": "TK301",
            "points": [
                {
                    "x": 1000,
                    "y": 305
                },
                {
                    "x": 980,
                    "y": 305
                },
                {
                    "x": 980,
                    "y": 360
                }
            ]
        },
         "dosing-link-1": {
            "source": "TK501",
            "target": "PMD501",
            "points": [
                {
                    "x": 475,
                    "y": 5
                },
                {
                    "x": 500,
                    "y": 5
                }
            ]
        },
        "dosing-link-2": {
            "source": "PMD501",
            "target": "TK201",
            "points": [
                {
                    "x": 525,
                    "y": 5
                },
                {
                    "x": 540,
                    "y": 5
                },
                {
                    "x": 540,
                    "y": 150
                }
            ]
        },
        
    }
}