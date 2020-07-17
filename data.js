var APP_DATA = {
  "scenes": [
    {
      "id": "0-umgebung",
      "name": "Umgebung",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.23185601055280358,
        "pitch": 0.16928829873479145,
        "fov": 1.3729094996294073
      },
      "linkHotspots": [
        {
          "yaw": -0.5402636473492244,
          "pitch": -0.03721496803584046,
          "rotation": 0,
          "target": "2-arbeitsplatz"
        },
        {
          "yaw": -0.28882448906832003,
          "pitch": -0.025247882078511807,
          "rotation": 0,
          "target": "1-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6214216667604582,
          "pitch": 0.627222933145708,
          "title": "Terminals",
          "text": "Ehmalige Terminals des Flughafen Tegel"
        },
        {
          "yaw": -0.025250807429989308,
          "pitch": 0.1549161770428924,
          "title": "Schnittstelle",
          "text": "Der Transhub dockt an das Hexagonale Terminalgebäude an und verbindet die Gebäude. Hier wird das Gebäude erschlossen"
        }
      ]
    },
    {
      "id": "1-atrium",
      "name": "Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.46721518935367,
        "pitch": 1.3512796317321953,
        "fov": 1.3729094996294073
      },
      "linkHotspots": [
        {
          "yaw": -0.7577790177153787,
          "pitch": -0.058012835065909485,
          "rotation": 0,
          "target": "2-arbeitsplatz"
        },
        {
          "yaw": 0.7091164747575203,
          "pitch": 0.05513819700008327,
          "rotation": 0,
          "target": "1-atrium"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-arbeitsplatz",
      "name": "Arbeitsplatz",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.0722892897565224,
        "pitch": 0.297649756017222,
        "fov": 1.3729094996294073
      },
      "linkHotspots": [
        {
          "yaw": 0.6405950973496886,
          "pitch": 0.12156792086475221,
          "rotation": 0,
          "target": "1-atrium"
        },
        {
          "yaw": -1.004549299753787,
          "pitch": 0.0020475197755462915,
          "rotation": 0,
          "target": "0-umgebung"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
