const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const turf = require("@turf/turf");
const bodyParser = require("body-parser");


const secretKey = "key";
app.use(bodyParser.json());

function generateToken() {
  return jwt.sign({}, secretKey, { expiresIn: "10h" });
}


function checkToken(req, res, next) {
  const authHeader = req.header("Authorization");
  const authToken = authHeader ? authHeader.replace("Bearer ", "") : "";

  if (!authToken) {
    return res.status(401).json({ 
      error: "Unauthorized" 
    });
  }

  jwt.verify(authToken, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ 
        error: "Unauthorized" 
      });
    }
    next();
  });
}


app.post("/api/intersections", checkToken, (req, res) => {

  const lineString = req.body.lineString;
  if (!lineString) {
    return res.status(400).json({ error: "Invalid request body" });
  }
  const lines = [
    {
      id: "L01",
      line: {
        type: "LineString",
        coordinates: [
          [-74.0386542, 40.7302174],
          [-74.038756, 40.7295611],
        ],
      },
    },
    {
      id: "L02",
      line: {
        type: "LineString",
        coordinates: [
          [-74.061602, 40.705933],
          [-74.06214, 40.706563],
        ],
      },
    },
    {
      id: "L03",
      line: {
        type: "LineString",
        coordinates: [
          [-74.156101, 40.709045],
          [-74.156801, 40.707801],
        ],
      },
    },
    {
      id: "L04",
      line: {
        type: "LineString",
        coordinates: [
          [-99.311072, 19.488246],
          [-99.311002, 19.488132],
        ],
      },
    },
    {
      id: "L05",
      line: {
        type: "LineString",
        coordinates: [
          [-99.311072, 19.488246],
          [-99.311002, 19.488132],
        ],
      },
    },
    {
      id: "L06",
      line: {
        type: "LineString",
        coordinates: [
          [-102.829608, 23.177846],
          [-102.829469, 23.177842],
        ],
      },
    },
    {
      id: "L07",
      line: {
        type: "LineString",
        coordinates: [
          [-102.91307, 23.237655],
          [-102.913173, 23.237484],
        ],
      },
    },
    {
      id: "L08",
      line: {
        type: "LineString",
        coordinates: [
          [-101.065638, 25.451006],
          [-101.065747, 25.451142],
        ],
      },
    },
    {
      id: "L09",
      line: {
        type: "LineString",
        coordinates: [
          [-101.067146, 25.451271],
          [-101.067264, 25.451192],
        ],
      },
    },
    {
      id: "L10",
      line: {
        type: "LineString",
        coordinates: [
          [-95.883187, 41.137233],
          [-95.883079, 41.137048],
        ],
      },
    },
    {
      id: "L11",
      line: {
        type: "LineString",
        coordinates: [
          [-95.868832, 40.999998],
          [-95.868593, 41.000089],
        ],
      },
    },
    {
      id: "L12",
      line: {
        type: "LineString",
        coordinates: [
          [-95.55877, 29.719849],
          [-95.55907, 29.719417],
        ],
      },
    },
    {
      id: "L13",
      line: {
        type: "LineString",
        coordinates: [
          [-95.557118, 29.716399],
          [-95.556745, 29.716426],
        ],
      },
    },
    {
      id: "L14",
      line: {
        type: "LineString",
        coordinates: [
          [-80.389066, 25.87167],
          [-80.389455, 25.871849],
        ],
      },
    },
    {
      id: "L15",
      line: {
        type: "LineString",
        coordinates: [
          [-80.385768, 25.870139],
          [-80.385764, 25.870427],
        ],
      },
    },
    {
      id: "L16",
      line: {
        type: "LineString",
        coordinates: [
          [-80.387307, 25.845605],
          [-80.386517, 25.845614],
        ],
      },
    },
    {
      id: "L17",
      line: {
        type: "LineString",
        coordinates: [
          [-80.387439, 25.851352],
          [-80.387722, 25.851354],
        ],
      },
    },
    {
      id: "L18",
      line: {
        type: "LineString",
        coordinates: [
          [-82.436436, 27.954596],
          [-82.436292, 27.954772],
        ],
      },
    },
    {
      id: "L19",
      line: {
        type: "LineString",
        coordinates: [
          [-82.461462, 27.943111],
          [-82.461444, 27.943334],
        ],
      },
    },
    {
      id: "L20",
      line: {
        type: "LineString",
        coordinates: [
          [-82.461885, 27.942732],
          [-82.461888, 27.942575],
        ],
      },
    },
    {
      id: "L21",
      line: {
        type: "LineString",
        coordinates: [
          [-104.782665, 39.916254],
          [-104.782906, 39.915992],
        ],
      },
    },
    {
      id: "L22",
      line: {
        type: "LineString",
        coordinates: [
          [-104.851563, 39.932672],
          [-104.851404, 39.932676],
        ],
      },
    },
    {
      id: "L23",
      line: {
        type: "LineString",
        coordinates: [
          [-96.899437, 32.910762],
          [-96.899738, 32.91075],
        ],
      },
    },
    {
      id: "L24",
      line: {
        type: "LineString",
        coordinates: [
          [-96.9019583, 32.9076669],
          [-96.9019857, 32.9078065],
        ],
      },
    },
    {
      id: "L25",
      line: {
        type: "LineString",
        coordinates: [
          [-71.112546, 42.351257],
          [-71.11243, 42.351384],
        ],
      },
    },
    {
      id: "L26",
      line: {
        type: "LineString",
        coordinates: [
          [-71.112433, 42.351394],
          [-71.112307, 42.351557],
        ],
      },
    },
    {
      id: "L27",
      line: {
        type: "LineString",
        coordinates: [
          [-95.776198, 29.704225],
          [-95.77644, 29.704221],
        ],
      },
    },
    {
      id: "L28",
      line: {
        type: "LineString",
        coordinates: [
          [-71.413586, 41.951399],
          [-71.413585, 41.951033],
        ],
      },
    },
    {
      id: "L29",
      line: {
        type: "LineString",
        coordinates: [
          [-76.560518, 43.059497],
          [-76.560884, 43.060285],
        ],
      },
    },
    {
      id: "L30",
      line: {
        type: "LineString",
        coordinates: [
          [-76.8491, 42.965208],
          [-76.849238, 42.965968],
        ],
      },
    },
    {
      id: "L31",
      line: {
        type: "LineString",
        coordinates: [
          [-95.9473347, 36.021712],
          [-95.9473327, 36.0215865],
        ],
      },
    },
    {
      id: "L32",
      line: {
        type: "LineString",
        coordinates: [
          [-95.924582, 36.024958],
          [-95.9245402, 36.0251324],
        ],
      },
    },
    {
      id: "L33",
      line: {
        type: "LineString",
        coordinates: [
          [-95.7365923, 36.0438484],
          [-95.7368391, 36.0441511],
        ],
      },
    },
    {
      id: "L34",
      line: {
        type: "LineString",
        coordinates: [
          [-95.742195, 36.044985],
          [-95.74238, 36.044897],
        ],
      },
    },
    {
      id: "L35",
      line: {
        type: "LineString",
        coordinates: [
          [-97.651642, 35.214745],
          [-97.651647, 35.214927],
        ],
      },
    },
    {
      id: "L36",
      line: {
        type: "LineString",
        coordinates: [
          [-97.697811, 35.211156],
          [-97.69791, 35.210806],
        ],
      },
    },
    {
      id: "L37",
      line: {
        type: "LineString",
        coordinates: [
          [-97.535654, 35.608767],
          [-97.535667, 35.608981],
        ],
      },
    },
    {
      id: "L38",
      line: {
        type: "LineString",
        coordinates: [
          [-97.546073, 35.609614],
          [-97.546126, 35.609459],
        ],
      },
    },
    {
      id: "L39",
      line: {
        type: "LineString",
        coordinates: [
          [-95.158076, 36.187702],
          [-95.157943, 36.187533],
        ],
      },
    },
    {
      id: "L40",
      line: {
        type: "LineString",
        coordinates: [
          [-94.976081, 36.2166334],
          [-94.9760616, 36.21687],
        ],
      },
    },
    {
      id: "L41",
      line: {
        type: "LineString",
        coordinates: [
          [-77.056319, 39.108952],
          [-77.056503, 39.108797],
        ],
      },
    },
    {
      id: "L42",
      line: {
        type: "LineString",
        coordinates: [
          [-77.051648, 39.105948],
          [-77.051861, 39.105767],
        ],
      },
    },
  ];
  const intersectingLines = lines.filter((line) => {
    const lineSegment = turf.lineString(line.line.coordinates);
    return turf.booleanIntersects(lineString, lineSegment);
  });
  let result=[];
  try {
     result = intersectingLines.map((line) => {
      const intersection = turf.lineIntersect(lineString, turf.lineString(line.line.coordinates));
      const points = intersection.features.map((feature) => feature.geometry.coordinates);
      return {
        lineId: line.id,
        points: points,
      };
    });
  }
  catch (error) {
    return res.status(500).json({
      error: "lineString is invalid"
    })
  }

  if (result.length === 0) {
    console.log("No intersections found");
    res.json([]);
  } else {
    res.json(result); 
  }

});


app.get("/generate-token", (req, res) => {
  const token = generateToken();
  res.json({ token });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
