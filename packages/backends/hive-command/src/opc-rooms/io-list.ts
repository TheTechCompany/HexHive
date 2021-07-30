export default {
    platforms: [
        {
            type: "io-link",
            busIndex: 0,
            pinCount: 8
        },
        {
            type: "io-link",
            busIndex: 1,
            pinCount: 8
        },
        {
            type: "revpi-dio",
            busIndex: 0,
            pinCount: 14
        }
    ],
    devices: [    
    {
            "label": "AV101",
            "type": "valve",
            "pins": [{
                "platform": "revpi-dio",
                "bus": 0,
                "type": "output",
                "pin": 0
            }]
        },
        {
            "label": "LT101",
            "type": "levelSensor",
            "pins": [{
                "platform": "io-link",
                "bus": 0,
                "type": "input",
                "pin": 0
            }]
        },
        {
            "label": "LT201",
            "type": "levelSensor",
            "pins": [{
                "platform": "io-link",
                "bus": 0,
                "type": "input",
                "pin": 1
            }]
        },
        {
            "label": "LT301",
            "type": "levelSensor",
            "pins": [{
                "platform": "io-link",
                "bus": 0,
                "type": "input",
                "pin": 2
            }]
        },
        {
            "label": "FIT101",
            "type": "flowMeter",
            "pins": [{
                "platform": "io-link",
                "bus": 1,
                "type": "input",
                "pin": 0
            }]
        },
        {
            "label": "FIT201",
            "type": "flowMeter",
            "pins": [{
                "platform": "io-link",
                "bus": 1,
                "type": "input",
                "pin": 1
            }]
        },
        {
            "label": "FIT301",
            "type": "flowMeter",
            "pins": [{
                "platform": "io-link",
                "bus": 1,
                "type": "input",
                "pin": 2
            }]
        },
        {
            "label": "AV201",
            "type": "valve",
            "pins": [{
                "platform": "revpi-dio",
                "bus": 0,
                "type": "output",
                "pin": 1
            }]
        },
        {
            "label": "AV202",
            "type": "valve",
            "pins": [{
                "platform": "revpi-dio",
                "bus": 0,
                "type": "output",
                "pin": 2
            }]
        },
        {
            "label": "AV301",
            "type": "valve",
              "pins": [{
                "platform": "revpi-dio",
                "bus": 0,
                "type": "output",
                "pin": 3
            }]
        },
        {
            "label": "AV302",
            "type": "valve",
            "pins": [{
                "platform": "revpi-dio",
                "bus": 0,
                "type": "output",
                "pin": 4
            }]
        },
        {
            "label": "AV401",
            "type": "valve",
            "pins": [{
                "platform": "revpi-dio",
                "bus": 0,
                "type": "output",
                "pin": 5
            }]
        },
        {
            "label": "AV402",
            "type": "valve",
              "pins": [{
                "platform": "revpi-dio",
                "bus": 0,
                "type": "output",
                "pin": 6
            }]
        },
        {
            "label": "AV403",
            "type": "valve",
              "pins": [{
                "platform": "revpi-dio",
                "bus": 0,
                "type": "output",
                "pin": 7
            }]
        },
        {
            "label": "BLO701",
            "type": "blower",
              "pins": [{
                "platform": "revpi-dio",
                "bus": 0,
                "type": "output",
                "pin": 8
            }]
        },
        {
            "label": "SC101",
            "type": "vsd",
            "pins": [{
                "platform": "io-link",
                "bus": 1,
                "type": "output",
                "pin": 3
            }]
        },
        {
            "label": "SC201",
            "type": "vsd",
            "pins": [{
                "platform": "io-link",
                "bus": 1,
                "type": "output",
                "pin": 3
            }]
        },
        {
            "label": "SC301",
            "type": "vsd",
            "pins": [{
                "platform": "io-link",
                "bus": 1,
                "type": "output",
                "pin": 4
            }]
        },
        {
            "label": "PMD501",
            "type": "dosingPump",
            "pins": [{
                "platform": "revpi-dio",
                "bus": 0,
                "type": "output",
                "pin": 9
            }]
        },
        {
            "label": "PMD601",
            "type": "dosingPump",
            "pins": [{
                "platform": "revpi-dio",
                "bus": 0,
                "type": "output",
                "pin": 10
            }]
        }
    ]
}