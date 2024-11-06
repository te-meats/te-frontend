import { CutSheetFormData } from "./interfaces";

// TODO: This is a representation of the cut sheet data structure. This file is temporary until we can call the back-end to fetch the cut sheet form.
export const porkInstructionFormData: CutSheetFormData = {
    primals: [
        {
            id: 0,
            name: "Shoulder",
            cuts: [
                {
                    id: "0",
                    name: "Picnic Roast",
                    cutTypeIndex: 0,
                    cutTypes: [
                        {
                            id: "0",
                            name: "Bone-in",
                            selectedPrepOptionIndex: 0,
                            prepTypes: [
                                {
                                    id: "0",
                                    name: "Ground",
                                    selectedQuantityIndex: 1,
                                    quantities: ["1-2lb", "2-3lb", "3-4lb"]
                                },
                                {
                                    id: "1",
                                    name: "Roast",
                                    selectedQuantityIndex: 0,
                                    quantities: ["2-3lb", "3-4lb", "Whole"]
                                },
                            ],
                        },
                        {
                            id: "1",
                            name: "Boneless",
                            selectedPrepOptionIndex: 1,
                            prepTypes: [
                                {
                                    id: "0",
                                    name: "Ground",
                                    selectedQuantityIndex: 0,
                                    quantities: ["1-2lb", "2-3lb", "3-4lb"]
                                },
                                {
                                    id: "1",
                                    name: "Roast",
                                    selectedQuantityIndex: 0,
                                    quantities: ["2-3lb", "3-4lb", "Whole"]
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "1",
                    name: "Boston Butt",
                    cutTypeIndex: 0,
                    cutTypes: [
                        {
                            id: "0",
                            name: "Bone-in",
                            selectedPrepOptionIndex: 0,
                            prepTypes: [
                                {
                                    id: "0",
                                    name: "Steaks",
                                    selectedQuantityIndex: 1,
                                    quantities: ["1 inch", "1.25 inch", "2 inch"]
                                },
                            ],
                        },
                        {
                            id: "1",
                            name: "Boneless",
                            selectedPrepOptionIndex: 1,
                            prepTypes: [
                                {
                                    id: "0",
                                    name: "Steaks",
                                    selectedQuantityIndex: 1,
                                    quantities: ["1 inch", "1.25 inch", "2 inch"]
                                },
                                {
                                    id: "1",
                                    name: "Roast",
                                    selectedQuantityIndex: 0,
                                    quantities: ["2-3lb", "3-4lb", "Whole"]
                                },
                            ],
                        },
                        {
                            id: "2",
                            name: "Shoulder Bacon",
                            selectedPrepOptionIndex: 1,
                            prepTypes: [
                                {
                                    id: "0",
                                    name: "Nitrite",
                                    selectedQuantityIndex: 1,
                                    quantities: ["2-3lb", "3-4lb", "Whole"]
                                },
                                {
                                    id: "1",
                                    name: "Celery Powder",
                                    selectedQuantityIndex: 0,
                                    quantities: ["2-3lb", "3-4lb", "Whole"]
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "2",
                    name: "Back Bone",
                    cutTypeIndex: 0,
                    cutTypes: [
                        {
                            id: "0",
                            name: "Keep",
                            selectedPrepOptionIndex: 0,
                            prepTypes: [
                                {
                                    id: "0",
                                    name: "# Per Package",
                                    selectedQuantityIndex: 1,
                                    quantities: ["1", "2", "3"]
                                },
                                {
                                    id: "1",
                                    name: "Ground",
                                    selectedQuantityIndex: 1,
                                    quantities: ["1-2lb", "2-3lb", "3-4lb"]
                                },
                            ],
                        },
                        {
                            id: "1",
                            name: "Smoke",
                            selectedPrepOptionIndex: 0,
                            prepTypes: [
                                {
                                    id: "0",
                                    name: "Nitrite",
                                    selectedQuantityIndex: 1,
                                    quantities: ["2-3lb", "3-4lb", "Whole"]
                                },
                                {
                                    id: "1",
                                    name: "Celery Powder",
                                    selectedQuantityIndex: 0,
                                    quantities: ["2-3lb", "3-4lb", "Whole"]
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "3",
                    name: "Jowl",
                    cutTypeIndex: 0,
                    cutTypes: [
                        {
                            id: "0",
                            name: "Keep",
                            selectedPrepOptionIndex: 0,
                            prepTypes: [
                                {
                                    id: "0",
                                    name: "# Per Package",
                                    selectedQuantityIndex: 1,
                                    quantities: ["1", "2", "3"]
                                },
                                {
                                    id: "1",
                                    name: "Ground",
                                    selectedQuantityIndex: 1,
                                    quantities: ["1-2lb", "2-3lb", "3-4lb"]
                                },
                            ],
                        },
                        {
                            id: "1",
                            name: "Smoke",
                            selectedPrepOptionIndex: 0,
                            prepTypes: [
                                {
                                    id: "0",
                                    name: "Nitrite",
                                    selectedQuantityIndex: 1,
                                    quantities: ["2-3lb", "3-4lb", "Whole"]
                                },
                                {
                                    id: "1",
                                    name: "Celery Powder",
                                    selectedQuantityIndex: 0,
                                    quantities: ["2-3lb", "3-4lb", "Whole"]
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 1,
            name: "Loin",
            cuts: [
                {
                    id: "0",
                    name: "Loin",
                    cutTypeIndex: 0,
                    cutTypes: [
                        {
                            id: "0",
                            name: "Bone-in",
                            selectedPrepOptionIndex: 0,
                            prepTypes: [
                                {
                                    id: "0",
                                    name: "Ground",
                                    selectedQuantityIndex: 1,
                                    quantities: ["1-2lb", "2-3lb", "3-4lb"]
                                },
                                {
                                    id: "1",
                                    name: "Roast",
                                    selectedQuantityIndex: 0,
                                    quantities: ["2-3lb", "3-4lb", "Whole"]
                                },
                            ],
                        },
                        {
                            id: "1",
                            name: "Boneless",
                            selectedPrepOptionIndex: 1,
                            prepTypes: [
                                {
                                    id: "0",
                                    name: "Ground",
                                    selectedQuantityIndex: 0,
                                    quantities: ["1-2lb", "2-3lb", "3-4lb"]
                                },
                                {
                                    id: "1",
                                    name: "Roast",
                                    selectedQuantityIndex: 0,
                                    quantities: ["2-3lb", "3-4lb", "Whole"]
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            name: "PRIMAL (sub cut test)",
            cuts: [
                {
                    id: "0",
                    name: "Loin",
                    cutTypeIndex: 0,
                    cutTypes: [
                        {
                            id: "0",
                            name: "Bone-in",
                            selectedPrepOptionIndex: 0,
                            prepTypes: [
                                {
                                    id: "0",
                                    name: "Ground",
                                    selectedQuantityIndex: 1,
                                    quantities: ["1-2lb", "2-3lb", "3-4lb"]
                                },
                                {
                                    id: "1",
                                    name: "Roast",
                                    selectedQuantityIndex: 0,
                                    quantities: ["2-3lb", "3-4lb", "Whole"]
                                },
                            ],
                        },
                        {
                            id: "1",
                            name: "Boneless",
                            selectedPrepOptionIndex: 1,
                            prepTypes: [
                                {
                                    id: "0",
                                    name: "Ground",
                                    selectedQuantityIndex: 0,
                                    quantities: ["1-2lb", "2-3lb", "3-4lb"]
                                },
                                {
                                    id: "1",
                                    name: "Roast",
                                    selectedQuantityIndex: 0,
                                    quantities: ["2-3lb", "3-4lb", "Whole"]
                                },
                            ],
                        },
                        {
                            id: "2",
                            name: "PREP TYPE (Sub-Cut-Test)",
                            selectedPrepOptionIndex: 1,
                            prepTypes: [],
                            subCuts: [
                                {
                                    id: "0",
                                    name: "SUB CUT",
                                    cutTypeIndex: 0,
                                    cutTypes: [
                                        {
                                            id: "0",
                                            name: "Bone-in",
                                            selectedPrepOptionIndex: 0,
                                            prepTypes: [
                                                {
                                                    id: "0",
                                                    name: "Ground",
                                                    selectedQuantityIndex: 1,
                                                    quantities: ["1-2lb", "2-3lb", "3-4lb"]
                                                },
                                                {
                                                    id: "1",
                                                    name: "Roast",
                                                    selectedQuantityIndex: 0,
                                                    quantities: ["2-3lb", "3-4lb", "Whole"]
                                                },
                                            ],
                                        },
                                        {
                                            id: "1",
                                            name: "Boneless",
                                            selectedPrepOptionIndex: 1,
                                            prepTypes: [
                                                {
                                                    id: "0",
                                                    name: "Ground",
                                                    selectedQuantityIndex: 0,
                                                    quantities: ["1-2lb", "2-3lb", "3-4lb"]
                                                },
                                                {
                                                    id: "1",
                                                    name: "Roast",
                                                    selectedQuantityIndex: 0,
                                                    quantities: ["2-3lb", "3-4lb", "Whole"]
                                                },
                                            ],
                                        },
                                        {
                                            id: "2",
                                            name: "PREP TYPE (Sub-Cut-Test)",
                                            selectedPrepOptionIndex: 1,
                                            prepTypes: [],
                                            subCuts: [
                                                {
                                                    id: "0",
                                                    name: "DEEPER SUB CUT",
                                                    cutTypeIndex: 0,
                                                    cutTypes: [
                                                        {
                                                            id: "0",
                                                            name: "Bone-in",
                                                            selectedPrepOptionIndex: 0,
                                                            prepTypes: [
                                                                {
                                                                    id: "0",
                                                                    name: "Ground",
                                                                    selectedQuantityIndex: 1,
                                                                    quantities: ["1-2lb", "2-3lb", "3-4lb"]
                                                                },
                                                                {
                                                                    id: "1",
                                                                    name: "Roast",
                                                                    selectedQuantityIndex: 0,
                                                                    quantities: ["2-3lb", "3-4lb", "Whole"]
                                                                },
                                                            ],
                                                        },
                                                        {
                                                            id: "1",
                                                            name: "Boneless",
                                                            selectedPrepOptionIndex: 1,
                                                            prepTypes: [
                                                                {
                                                                    id: "0",
                                                                    name: "Ground",
                                                                    selectedQuantityIndex: 0,
                                                                    quantities: ["1-2lb", "2-3lb", "3-4lb"]
                                                                },
                                                                {
                                                                    id: "1",
                                                                    name: "Roast",
                                                                    selectedQuantityIndex: 0,
                                                                    quantities: ["2-3lb", "3-4lb", "Whole"]
                                                                },
                                                            ],
                                                        },
                                                        {
                                                            id: "2",
                                                            name: "PREP TYPE (Sub-Cut-Test)",
                                                            selectedPrepOptionIndex: 1,
                                                            prepTypes: [],
                                                            subCuts: [

                                                                {
                                                                    id: "0",
                                                                    name: "EVEN DEEPER SUB CUT",
                                                                    cutTypeIndex: 0,
                                                                    cutTypes: [
                                                                        {
                                                                            id: "0",
                                                                            name: "Bone-in",
                                                                            selectedPrepOptionIndex: 0,
                                                                            prepTypes: [
                                                                                {
                                                                                    id: "0",
                                                                                    name: "Ground",
                                                                                    selectedQuantityIndex: 1,
                                                                                    quantities: ["1-2lb", "2-3lb", "3-4lb"]
                                                                                },
                                                                                {
                                                                                    id: "1",
                                                                                    name: "Roast",
                                                                                    selectedQuantityIndex: 0,
                                                                                    quantities: ["2-3lb", "3-4lb", "Whole"]
                                                                                },
                                                                            ],
                                                                        },
                                                                        {
                                                                            id: "1",
                                                                            name: "Boneless",
                                                                            selectedPrepOptionIndex: 1,
                                                                            prepTypes: [
                                                                                {
                                                                                    id: "0",
                                                                                    name: "Ground",
                                                                                    selectedQuantityIndex: 0,
                                                                                    quantities: ["1-2lb", "2-3lb", "3-4lb"]
                                                                                },
                                                                                {
                                                                                    id: "1",
                                                                                    name: "Roast",
                                                                                    selectedQuantityIndex: 0,
                                                                                    quantities: ["2-3lb", "3-4lb", "Whole"]
                                                                                },
                                                                            ],
                                                                        },
                                                                        {
                                                                            id: "2",
                                                                            name: "PREP TYPE (Sub-Cut-Test)",
                                                                            selectedPrepOptionIndex: 1,
                                                                            prepTypes: [],
                                                                            subCuts: []
                                                                        },
                                                                    ],
                                                                },
                                                            ]
                                                        },
                                                    ],
                                                },
                                            ]
                                        },
                                    ],
                                },

                            ]
                        },
                    ],
                },
            ],
        },
    ],
}
// {
//     name: "Loin",
//     cuts: [
//         {
//             name: "Loin",
//             selectedCutTypeIndex: "",
//             cutTypes: [
//                 {
//                     name: "Ground",
//                     selectedPrepOptionIndex: 0,
//                     prepTypes: [
//                         {
//                             name: "Ground",
//                             selectedQuantityIndex: 0,
//                             quantities: ["1-2lb", "2-3lb", "3-4lb"]
//                         },
//                     ],
//                 },
//                 {
//                     name: "Bone-in",
//                     selectedPrepOptionIndex: 0,
//                     prepTypes: [
//                         {
//                             name: "Roast",
//                             selectedQuantityIndex: 0,
//                             quantities: ["1-2lb", "2-3lb", "Whole"]
//                         },
//                         {
//                             name: "Chops",
//                             selectedQuantityIndex: 0,
//                             quantities: ["1 inch", "1.25 inch", "2 inch"]
//                         },
//                     ],
//                 },
//                 {
//                     name: "Boneless",
//                     selectedPrepOptionIndex: 0,
//                     prepTypes: [
//                         {
//                             name: "Roast",
//                             selectedQuantityIndex: 0,
//                             quantities: ["1-2lb", "2-3lb", "Whole"]
//                         },
//                         {
//                             name: "Chops",
//                             selectedQuantityIndex: 0,
//                             quantities: ["1 inch", "1.25 inch", "2 inch"]
//                         },
//                     ],
//                 },
//                 {
//                     name: "Canadian Bacon",
//                     selectedPrepOptionIndex: 0,
//                     prepTypes: [
//                         {
//                             name: "Nitrite",
//                             selectedQuantityIndex: 0,
//                             quantities: ["1-2lb", "2-3lb", "Whole"]
//                         },
//                         {
//                             name: "Celery Powder",
//                             selectedQuantityIndex: 0,
//                             quantities: ["1-2lb", "2-3lb", "Whole"]
//                         },
//                     ],
//                 },
//             ],
//         },
//         {
//             name: "Fish Loin",
//             selectedCutTypeIndex: "",
//             cutTypes: [
//                 {
//                     name: "Pull",
//                     selectedPrepOptionIndex: 0,
//                     prepTypes: [
//                         {
//                             name: "# Per Package",
//                             selectedQuantityIndex: 0,
//                             quantities: ["1", "2", "3"]
//                         },
//                     ],
//                 },
//             ],
//         },
//     ]
// },
// {
//     name: "Side",
//     cuts: [
//         {
//             name: "Side Meat",
//             selectedCutTypeIndex: "",
//             cutTypes: [
//                 {
//                     name: "Ground",
//                     selectedPrepOptionIndex: 0,
//                     prepTypes: [
//                         {
//                             name: "Weight",
//                             selectedQuantityIndex: 0,
//                             quantities: ["1-2lb", "2-3lb", "3-4lb"]
//                         },
//                     ],
//                 },
//                 {
//                     name: "Unsmoked",
//                     selectedPrepOptionIndex: 0,
//                     prepTypes: [
//                         {
//                             name: "Slabbed",
//                             selectedQuantityIndex: 0,
//                             quantities: ["1-2lb", "2-3lb", "3-4lb"]
//                         },
//                         {
//                             name: "Sliced",
//                             selectedQuantityIndex: 0,
//                             quantities: ["1-2lb", "2-3lb", "3-4lb"]
//                         },
//                     ],
//                 },
//                 {
//                     name: "Smoked",
//                     selectedPrepOptionIndex: 0,
//                     prepTypes: [
//                         {
//                             name: "Slabbed",
//                             selectedQuantityIndex: 0,
//                             quantities: ["1-2lb", "2-3lb", "3-4lb"]
//                         },
//                         {
//                             name: "Sliced",
//                             selectedQuantityIndex: 0,
//                             quantities: ["1-2lb", "2-3lb", "3-4lb"]
//                         },
//                     ],
//                 },
//             ],
//         },
//         {
//             name: "Ribs",
//             selectedCutTypeIndex: "",
//             cutTypes: [
//                 {
//                     name: "Prep",
//                     selectedPrepOptionIndex: 0,
//                     prepTypes: [
//                         {
//                             name: "Slice Prep",
//                             selectedQuantityIndex: 0,
//                             quantities: ["Split", "Full"]
//                         },
//                     ],
//                 },
//             ],
//         },
//     ]
// },
// {
//     name: "Hams",
//     cuts: [
//         {
//             name: "Uncured Fresh Ham",
//             selectedCutTypeIndex: "",
//             cutTypes: [
//                 {
//                     name: "Ground",
//                     selectedPrepOptionIndex: 0,
//                     prepTypes: [
//                         {
//                             name: "Weight",
//                             selectedQuantityIndex: 0,
//                             quantities: ["1-2lb", "2-3lb", "3-4lb"]
//                         },
//                     ],
//                 },
//                 {
//                     name: "Bone-in",
//                     selectedPrepOptionIndex: 0,
//                     prepTypes: [
//                         {
//                             name: "Steaks",
//                             selectedQuantityIndex: 0,
//                             quantities: ["1 inch", "1.25 inch", "2 inch"]
//                         },
//                         {
//                             name: "Roast",
//                             selectedQuantityIndex: 0,
//                             quantities: ["1-2lb", "2-3lb", "3-4lb", "Whole"]
//                         },
//                     ],
//                 },
//                 {
//                     name: "Boneless",
//                     selectedPrepOptionIndex: 0,
//                     prepTypes: [
//                         {
//                             name: "Roast",
//                             selectedQuantityIndex: 0,
//                             quantities: ["1-2lb", "2-3lb", "3-4lb", "Whole"]
//                         },
//                         {
//                             name: "Smoked",
//                             selectedQuantityIndex: 0,
//                             quantities: ["Whole", "Half", "Quarter"]
//                         },
//                         {
//                             name: "Stew",
//                             selectedQuantityIndex: 0,
//                             quantities: ["1-2lb", "2-3lb", "3-4lb"]
//                         },
//                         {
//                             name: "Kebab",
//                             selectedQuantityIndex: 0,
//                             quantities: ["1-2lb", "2-3lb", "3-4lb"]
//                         },
//                         {
//                             name: "Fajita",
//                             selectedQuantityIndex: 0,
//                             quantities: ["1-2lb", "2-3lb", "3-4lb"]
//                         },
//                     ],
//                 },
//             ],
//         },
//         {
//             name: "Sweetheart Ham",
//             selectedCutTypeIndex: "",
//             cutTypes: [
//                 {
//                     name: "Ground",
//                     selectedPrepOptionIndex: 0,
//                     prepTypes: [
//                         {
//                             name: "Weight",
//                             selectedQuantityIndex: 0,
//                             quantities: ["1-2lb", "2-3lb", "3-4lb"]
//                         },
//                     ],
//                 },
//                 {
//                     name: "Keep",
//                     selectedPrepOptionIndex: 0,
//                     prepTypes: [
//                         {
//                             name: "Weight",
//                             selectedQuantityIndex: 0,
//                             quantities: ["1-2lb", "2-3lb", "3-4lb"]
//                         },
//                     ],
//                 },
//             ],
//         },
//         {
//             name: "Hocks",
//             selectedCutTypeIndex: "",
//             cutTypes: [
//                 {
//                     name: "Ground",
//                     selectedPrepOptionIndex: 0,
//                     prepTypes: [
//                         {
//                             name: "Weight",
//                             selectedQuantityIndex: 0,
//                             quantities: ["1-2lb", "2-3lb", "3-4lb"]
//                         },
//                     ],
//                 },
//                 {
//                     name: "Keep",
//                     selectedPrepOptionIndex: 0,
//                     prepTypes: [
//                         {
//                             name: "Weight",
//                             selectedQuantityIndex: 0,
//                             quantities: ["1-2lb", "2-3lb", "3-4lb"]
//                         },
//                     ],
//                 },
//                 {
//                     name: "Smoke",
//                     selectedPrepOptionIndex: 0,
//                     prepTypes: [
//                         {
//                             name: "Weight",
//                             selectedQuantityIndex: 0,
//                             quantities: ["1-2lb", "2-3lb", "3-4lb"]
//                         },
//                     ],
//                 },
//             ],
//         },
//     ]
// },
// }