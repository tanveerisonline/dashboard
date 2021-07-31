export const Tabs = [
  { label: "Snapshot", value: "snapshot" },
  { label: "BenchMark", value: "benchmark" },
];

export const dateOptions = [
  {
    name: "30 days",
    value: 30,
  },
  {
    name: "60 days",
    value: 60,
  },
  {
    name: "90 days",
    value: 90,
  },
  {
    name: "YoY",
    value: "YoY",
  },
];
export const SiteOptions = [
  {
    value: "Site 1",
    id: "30",
  },
  {
    value: "Site 2",
    id: "60",
  },
  {
    value: "Site 3",
    id: "90",
  },
  {
    value: "Site 4",
    id: "20",
  },
  {
    value: "Site 5",
    id: "10",
  },
  {
    value: "Site 6",
    id: "5",
  },
];

export const graphData = {
  data: [
    {
      name: "Dec 20",
      positive: 134,
      neutral: 22,
      negative: 32,
    },
    {
      name: "Jan 21",
      positive: 100,
      neutral: 18,
      negative: 32,
    },
    {
      name: "Feb 21",
      positive: 82,
      neutral: 8,
      negative: 28,
    },
  ],
  graphs: [
    {
      type: "monotone",
      dataKey: "uv",
      fill: "#8884d8",
    },
    {
      type: "monotone",
      dataKey: "pv",
      // stroke: "#8884d8",
      fill: "#82ca9d",
    },
    {
      type: "monotone",
      dataKey: "amt",
      // stroke: "#8884d8",
      fill: "#ffc658",
    },
  ],
};

export const RatingGraph1 = {
  inputData: {
    data: [
      {
        name: "Page A",
        Facebook: 400,
        Google: 240,
        Apartment: 500,
        yValue: 100,
      },
      {
        name: "Page B",
        Facebook: 300,
        Google: 138,
        Apartment: 200,

        yValue: 130,
      },
      {
        name: "Page C",
        Facebook: 200,
        Google: 900,
        Apartment: 100,

        yValue: 180,
      },
      {
        name: "Page D",
        Facebook: 270,
        Google: 398,
        Apartment: 80,

        yValue: 250,
      },
      {
        name: "Page E",
        Facebook: 180,
        Google: 480,
        Apartment: 0,

        yValue: 300,
      },
    ],
  },

  graphs: [
    {
      type: "monotone",
      dataKey: "Facebook",
      stroke: "#8884d8",
      fill: "#8884d8",
      fillOpacity: ".7",
    },
    {
      type: "monotone",
      dataKey: "Google",
      stroke: "#82ca9d",
      fill: "#82ca9d",
      fillOpacity: "0",
    },
    {
      type: "monotone",
      dataKey: "Apartment",
      stroke: "#ffc658",
      fill: "#ffc658",
      fillOpacity: "0",
    },
  ],
};

export const RatingGraph = {
  inputData: {
    data: [
      {
        Apartments: 1,
        apartmentguide: 0,
        apartmentratings: 1,
        facebook: 4,
        google: 72,
        modernmessage: 69,
        rent: 0,
        yellowpages: 0,
        yelp: 5,
        aggregated: 152,
        name: "Map 21",
      },
      {
        Apartments: 1,
        apartmentguide: 0,
        apartmentratings: 1,
        facebook: 4,
        google: 72,
        modernmessage: 69,
        rent: 0,
        yellowpages: 0,
        yelp: 5,
        aggregated: 152,
        name: "Map 21",
      },
      {
        Apartments: 1,
        apartmentguide: 0,
        apartmentratings: 1,
        facebook: 4,
        google: 72,
        modernmessage: 69,
        rent: 0,
        yellowpages: 0,
        yelp: 5,
        aggregated: 152,
        name: "Map 21",
      },
      {
        Apartments: 1,
        apartmentguide: 0,
        apartmentratings: 1,
        facebook: 4,
        google: 72,
        modernmessage: 69,
        rent: 0,
        yellowpages: 0,
        yelp: 5,
        aggregated: 152,
        name: "Map 21",
      },
      {
        Apartments: 1,
        apartmentguide: 0,
        apartmentratings: 1,
        facebook: 4,
        google: 72,
        modernmessage: 69,
        rent: 0,
        yellowpages: 0,
        yelp: 5,
        aggregated: 152,
        name: "Map 21",
      },
      {
        name: "Map 21",
        Apartments: 1,
        apartmentguide: 0,
        apartmentratings: 1,
        facebook: 4,
        google: 72,
        modernmessage: 69,
        rent: 0,
        yellowpages: 0,
        yelp: 5,
        aggregated: 152,
      },
    ],
  },

  graphs: [
    {
      dataKey: "Apartments",
      type: "monotone",
      fill: "#8700af",
      // stroke: "#8700af",
      fillOpacity: 0.7,
    },
    {
      dataKey: "apartmentguide",
      type: "monotone",
      fill: "#875f5f",
      // stroke: "#875f5f",
      fillOpacity: 0,
    },
    {
      dataKey: "apartmentratings",
      type: "monotone",
      fill: "#000087",
      stroke: "#000087",
      fillOpacity: 0,
    },
    {
      dataKey: "facebook",
      type: "monotone",
      fill: "#8a8a8a",
      stroke: "#8a8a8a",
      fillOpacity: 0,
    },
    {
      dataKey: "google",
      type: "monotone",
      fill: "#af875f",
      stroke: "#af875f",
      fillOpacity: 0,
    },
    {
      dataKey: "modernmessage",
      type: "monotone",
      fill: "#af00ff",
      stroke: "#af00ff",
      fillOpacity: 0,
    },
    {
      dataKey: "rent",
      type: "monotone",
      fill: "#00d7d7",
      stroke: "#00d7d7",
      fillOpacity: 0,
    },
    {
      dataKey: "yellowpages",
      type: "monotone",
      fill: "#0000ff",
      stroke: "#0000ff",
      fillOpacity: 0,
    },
    {
      dataKey: "yelp",
      type: "monotone",
      fill: "#ff5f5f",
      stroke: "#ff5f5f",
      fillOpacity: 0,
    },
  ],
};

export const Filter = {
  levels: [
    {
      name: "My PortFolio",
      id: 10,
      type: "portfolio",
      details: [
        {
          name: "23 Lincoln data test",
          type: "property",
          id: "JTA0528678899",
          details: null,
        },
        {
          name: "33 East",
          type: "property",
          id: "JTA037637",
          details: null,
        },
        {
          name: "48 West",
          type: "property",
          id: "JTA016411",
          details: null,
        },
        {
          name: "9 North",
          type: "property",
          id: "JTA054737",
          details: null,
        },
        {
          name: "930 NoMo",
          type: "property",
          id: "JTA052869",
          details: null,
        },
        {
          name: "940 North",
          type: "property",
          id: "JTA065877",
          details: null,
        },
        {
          name: "admin level",
          type: "property",
          id: "JTA066537",
          details: null,
        },
        {
          name: "Ascend Five Points South",
          type: "property",
          id: "JTA133453",
          details: null,
        },
        {
          name: "Bixby",
          type: "property",
          id: "JTA133454",
          details: null,
        },
        {
          name: "Century Plaza",
          type: "property",
          id: "JTA117221",
          details: null,
        },
        {
          name: "Chateaux Normandie",
          type: "property",
          id: "JTA009109",
          details: null,
        },
        {
          name: "Crossings at Berkley Square",
          type: "property",
          id: "JTA105354",
          details: null,
        },
        {
          name: "Crossings at Hillcroft",
          type: "property",
          id: "JTA066226",
          details: null,
        },
        {
          name: "Excelsior on the Park",
          type: "property",
          id: "JTA133542",
          details: null,
        },
        {
          name: "Final Check on property",
          type: "property",
          id: "JTA6789900",
          details: null,
        },
        {
          name: "Gladstell Forest",
          type: "property",
          id: "JTA023508",
          details: null,
        },
        {
          name: "Grand Flats",
          type: "property",
          id: "JTA115143",
          details: null,
        },
        {
          name: "GROUPS UPLOAD",
          type: "property",
          id: "JTA678900",
          details: null,
        },
        {
          name: "Lake Royal Apartments",
          type: "property",
          id: "JTA000007",
          details: null,
        },
        {
          name: "Lakeview",
          type: "property",
          id: "JTA105295",
          details: null,
        },
        {
          name: "Metropolitan Flats",
          type: "property",
          id: "JTA132891",
          details: null,
        },
        {
          name: "Mission Hills ",
          type: "property",
          id: "JTA044388",
          details: null,
        },
        {
          name: "Montrachet Monarchy",
          type: "property",
          id: "JTA014436",
          details: null,
        },
        {
          name: "new das property",
          type: "property",
          id: "JTA67890090",
          details: null,
        },

        {
          name: "Parcside home apartments",
          type: "property",
          id: "JTA04735367",
          details: null,
        },
        {
          name: "Park Trails",
          type: "property",
          id: "JTA025435",
          details: null,
        },
        {
          name: "Park View Estates",
          type: "property",
          id: "JTA000001",
          details: null,
        },
        {
          name: "Red Pines",
          type: "property",
          id: "JTA081163",
          details: null,
        },
        {
          name: "Redemption Square",
          type: "property",
          id: "JTA133836",
          details: null,
        },
        {
          name: "Redwood Garden Apartments",
          type: "property",
          id: "JTA051466",
          details: null,
        },
        {
          name: "Reverb",
          type: "property",
          id: "JTA134017",
          details: null,
        },
        {
          name: "River Oaks",
          type: "property",
          id: "JTA105355",
          details: null,
        },
        {
          name: "srinagar property",
          type: "property",
          id: "JTA67890",
          details: null,
        },
        {
          name: "Tara Hall",
          type: "property",
          id: "JTA066234",
          details: null,
        },
        {
          name: "The Alora Apartments edited",
          type: "property",
          id: "JTA05100989",
          details: null,
        },
        {
          name: "The CoOp at The Med Center",
          type: "property",
          id: "JTA080838",
          details: null,
        },
        {
          name: "The Ellis Apartments",
          type: "property",
          id: "JTA051067",
          details: null,
        },
        {
          name: "The Huntington at Stonefield",
          type: "property",
          id: "JTA055496",
          details: null,
        },
        {
          name: "The Landings at Willowbrook",
          type: "property",
          id: "JTA041904",
          details: null,
        },
        {
          name: "The Penwell",
          type: "property",
          id: "JTA133835",
          details: null,
        },
        {
          name: "The Regency Gardens",
          type: "property",
          id: "JTA108820",
          details: null,
        },
        {
          name: "The West Hill town",
          type: "property",
          id: "JTA11597699",
          details: null,
        },
        {
          name: "Two Rivers",
          type: "property",
          id: "JTA105372",
          details: null,
        },
        {
          name: "Vanderbilt",
          type: "property",
          id: "JTA046628",
          details: null,
        },
        {
          name: "Verve, The",
          type: "property",
          id: "JTA066237",
          details: null,
        },
        {
          name: "Westbury Reserve Land",
          type: "property",
          id: "JTA011797",
          details: null,
        },
        {
          name: "Whispering Oaks",
          type: "property",
          id: "JTA046837",
          details: null,
        },
      ],
    },
    {
      name: "reader edit",
      id: 14,
      type: "level",
      details: [
        {
          name: "admin nph",
          id: 20,
          type: "user",
          details: [
            {
              name: "The Landings at Willowbrook",
              type: "property",
              id: "JTA041904",
              details: null,
              user_id: 20,
            },
            {
              name: "Vanderbilt",
              type: "property",
              id: "JTA046628",
              details: null,
              user_id: 20,
            },
            {
              name: "Verve, The",
              type: "property",
              id: "JTA066237",
              details: null,

              user_id: 20,
            },
            {
              name: "Westbury Reserve Land",
              type: "property",
              id: "JTA011797",
              details: null,

              user_id: 20,
            },
            {
              name: "Whispering Oaks",
              type: "property",
              id: "JTA046837",
              details: null,
              user_id: 20,
            },
            {
              name: "The Penwell",
              type: "property",
              id: "JTA133835",
              details: null,
              user_id: 20,
            },
            {
              name: "The Regency Gardens",
              type: "property",
              id: "JTA108820",
              details: null,
              user_id: 20,
            },
          ],
        },
        {
          name: "reader user",
          id: 111,
          type: "user",
          details: [
            {
              name: "Bixby",
              type: "property",
              id: "JTA133454",
              details: null,
              user_id: 111,
            },
          ],
        },
      ],
    },
  ],
};

export const benchMarkData = {
  review_trend: [
    {
      Apartments: 1,
      apartmentguide: 0,
      apartmentratings: 0,
      facebook: 5,

      aggregated: 3,
      name: "Apr 21",
    },
    {
      Apartments: 0,
      apartmentguide: 0,
      apartmentratings: 3,
      facebook: 1,
      google: 10,
      aggregated: 2,

      name: "Aug 20",
    },
    {
      Apartments: 0,
      apartmentguide: 7,
      apartmentratings: 5,
      facebook: 8,
      aggregated: 1,

      name: "Dec 20",
    },
    {
      Apartments: 0,
      apartmentguide: 0,
      apartmentratings: 4,
      facebook: 4,
      aggregated: 3,

      name: "Feb 21",
    },
    {
      Apartments: 1,
      apartmentguide: 1,
      apartmentratings: 3,
      facebook: 5,
      aggregated: 1,

      name: "Jan 21",
    },
  ],
  graphFormat: [
    {
      dataKey: "Apartments",
      type: "monotone",
      fill: "#d7ffaf",
      stroke: "#d7ffaf",
      fillOpacity: 0,
      __typename: "GraphFormatType",
    },
    {
      dataKey: "apartmentguide",
      type: "monotone",
      fill: "#d700af",
      stroke: "#d700af",
      fillOpacity: 0,
      __typename: "GraphFormatType",
    },
    {
      dataKey: "apartmentratings",
      type: "monotone",
      fill: "#5f5f5f",
      stroke: "#5f5f5f",
      fillOpacity: 0,
      __typename: "GraphFormatType",
    },
    {
      dataKey: "facebook",
      type: "monotone",
      fill: "#af005f",
      stroke: "#af005f",
      fillOpacity: 0,
      __typename: "GraphFormatType",
    },

    {
      dataKey: "aggregated",
      type: "monotone",
      fill: "#af0000",
      stroke: "#af0000",
      fillOpacity: 0.1,
      __typename: "GraphFormatType",
    },
  ],
};
