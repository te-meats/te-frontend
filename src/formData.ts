import { PrimalType } from "./interfaces";

export const porkInstructionFormData: Array<PrimalType> = [
    {
        value: "Shoulder",
        cuts: [
            {
                value: "Picnic Roast",
                selectedCutTypeIndex: "",
                cutTypes: [
                    {
                        value: "Boneless",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "Ground",
                                selectedQuantityIndex: 0,
                                units: ["1-2lb", "2-3lb", "3-4lb"]
                            },
                            {
                                value: "Roast",
                                selectedQuantityIndex: 0,
                                units: ["2-3lb", "3-4lb", "Whole"]
                            },
                        ],
                    },
                ],
            },
            {
                value: "Boston Butt",
                selectedCutTypeIndex: "",
                cutTypes: [
                    {
                        value: "Bone-in",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "Steaks",
                                selectedQuantityIndex: 0,
                                units: ["1 inch", "1.25 inch", "2 inch"]
                            },
                        ],
                    },
                    {
                        value: "Boneless",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "Roast",
                                selectedQuantityIndex: 0,
                                units: ["2-3lb", "3-4lb", "Whole"]
                            },
                            {
                                value: "Steaks",
                                selectedQuantityIndex: 0,
                                units: ["1 inch", "1.25 inch", "2 inch"]
                            },
                        ],
                    },
                    {
                        value: "Ground",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "Ground",
                                selectedQuantityIndex: 0,
                                units: ["2-3lb", "3-4lb", "Whole"]
                            },
                        ],
                    },
                    {
                        value: "Shoulder Bacon",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "Nitrite",
                                selectedQuantityIndex: 0,
                                units: ["2-3lb", "3-4lb", "Whole"]
                            },
                            {
                                value: "Celery Powder",
                                selectedQuantityIndex: 0,
                                units: ["2-3lb", "3-4lb", "Whole"]
                            },
                        ],
                    },
                ],
            },
            {
                value: "Back Bone",
                selectedCutTypeIndex: "",
                cutTypes: [
                    {
                        value: "Keep",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "# Per Package",
                                selectedQuantityIndex: 0,
                                units: ["1", "2", "3"]
                            },
                        ],
                    },
                    {
                        value: "Ground",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "# Per Package",
                                selectedQuantityIndex: 0,
                                units: ["1-2lb", "2-3lb", "3-4lb"]
                            },
                        ],
                    },
                ],
            },
            {
                value: "Jowl",
                selectedCutTypeIndex: "",
                cutTypes: [
                    {
                        value: "Keep",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "# Per Package",
                                selectedQuantityIndex: 0,
                                units: ["1", "2", "3"]
                            },
                        ],
                    },
                    {
                        value: "Ground",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "# Per Package",
                                selectedQuantityIndex: 0,
                                units: ["1-2lb", "2-3lb", "3-4lb"]
                            },
                        ],
                    },
                    {
                        value: "Smoke",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "Nitrite",
                                selectedQuantityIndex: 0,
                                units: ["1-2lb", "2-3lb", "3-4lb"]
                            },
                            {
                                value: "Celery Powder",
                                selectedQuantityIndex: 0,
                                units: ["1-2lb", "2-3lb", "3-4lb"]
                            },
                        ],
                    },
                ],
            },
        ]
    },
    {
        value: "Loin",
        cuts: [
            {
                value: "Loin",
                selectedCutTypeIndex: "",
                cutTypes: [
                    {
                        value: "Ground",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "Ground",
                                selectedQuantityIndex: 0,
                                units: ["1-2lb", "2-3lb", "3-4lb"]
                            },
                        ],
                    },
                    {
                        value: "Bone-in",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "Roast",
                                selectedQuantityIndex: 0,
                                units: ["1-2lb", "2-3lb", "Whole"]
                            },
                            {
                                value: "Chops",
                                selectedQuantityIndex: 0,
                                units: ["1 inch", "1.25 inch", "2 inch"]
                            },
                        ],
                    },
                    {
                        value: "Boneless",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "Roast",
                                selectedQuantityIndex: 0,
                                units: ["1-2lb", "2-3lb", "Whole"]
                            },
                            {
                                value: "Chops",
                                selectedQuantityIndex: 0,
                                units: ["1 inch", "1.25 inch", "2 inch"]
                            },
                        ],
                    },
                    {
                        value: "Canadian Bacon",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "Nitrite",
                                selectedQuantityIndex: 0,
                                units: ["1-2lb", "2-3lb", "Whole"]
                            },
                            {
                                value: "Celery Powder",
                                selectedQuantityIndex: 0,
                                units: ["1-2lb", "2-3lb", "Whole"]
                            },
                        ],
                    },
                ],
            },
            {
                value: "Fish Loin",
                selectedCutTypeIndex: "",
                cutTypes: [
                    {
                        value: "Pull",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "# Per Package",
                                selectedQuantityIndex: 0,
                                units: ["1", "2", "3"]
                            },
                        ],
                    },
                ],
            },
        ]
    },
    {
        value: "Side",
        cuts: [
            {
                value: "Side Meat",
                selectedCutTypeIndex: "",
                cutTypes: [
                    {
                        value: "Ground",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "Weight",
                                selectedQuantityIndex: 0,
                                units: ["1-2lb", "2-3lb", "3-4lb"]
                            },
                        ],
                    },
                    {
                        value: "Unsmoked",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "Slabbed",
                                selectedQuantityIndex: 0,
                                units: ["1-2lb", "2-3lb", "3-4lb"]
                            },
                            {
                                value: "Sliced",
                                selectedQuantityIndex: 0,
                                units: ["1-2lb", "2-3lb", "3-4lb"]
                            },
                        ],
                    },
                    {
                        value: "Smoked",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "Slabbed",
                                selectedQuantityIndex: 0,
                                units: ["1-2lb", "2-3lb", "3-4lb"]
                            },
                            {
                                value: "Sliced",
                                selectedQuantityIndex: 0,
                                units: ["1-2lb", "2-3lb", "3-4lb"]
                            },
                        ],
                    },
                ],
            },
            {
                value: "Ribs",
                selectedCutTypeIndex: "",
                cutTypes: [
                    {
                        value: "Prep",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "Slice Prep",
                                selectedQuantityIndex: 0,
                                units: ["Split", "Full"]
                            },
                        ],
                    },
                ],
            },
        ]
    },
    {
        value: "Hams",
        cuts: [
            {
                value: "Uncured Fresh Ham",
                selectedCutTypeIndex: "",
                cutTypes: [
                    {
                        value: "Ground",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "Weight",
                                selectedQuantityIndex: 0,
                                units: ["1-2lb", "2-3lb", "3-4lb"]
                            },
                        ],
                    },
                    {
                        value: "Bone-in",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "Steaks",
                                selectedQuantityIndex: 0,
                                units: ["1 inch", "1.25 inch", "2 inch"]
                            },
                            {
                                value: "Roast",
                                selectedQuantityIndex: 0,
                                units: ["1-2lb", "2-3lb", "3-4lb", "Whole"]
                            },
                        ],
                    },
                    {
                        value: "Boneless",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "Roast",
                                selectedQuantityIndex: 0,
                                units: ["1-2lb", "2-3lb", "3-4lb", "Whole"]
                            },
                            {
                                value: "Smoked",
                                selectedQuantityIndex: 0,
                                units: ["Whole", "Half", "Quarter"]
                            },
                            {
                                value: "Stew",
                                selectedQuantityIndex: 0,
                                units: ["1-2lb", "2-3lb", "3-4lb"]
                            },
                            {
                                value: "Kebab",
                                selectedQuantityIndex: 0,
                                units: ["1-2lb", "2-3lb", "3-4lb"]
                            },
                            {
                                value: "Fajita",
                                selectedQuantityIndex: 0,
                                units: ["1-2lb", "2-3lb", "3-4lb"]
                            },
                        ],
                    },
                ],
            },
            {
                value: "Sweetheart Ham",
                selectedCutTypeIndex: "",
                cutTypes: [
                    {
                        value: "Ground",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "Weight",
                                selectedQuantityIndex: 0,
                                units: ["1-2lb", "2-3lb", "3-4lb"]
                            },
                        ],
                    },
                    {
                        value: "Keep",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "Weight",
                                selectedQuantityIndex: 0,
                                units: ["1-2lb", "2-3lb", "3-4lb"]
                            },
                        ],
                    },
                ],
            },
            {
                value: "Hocks",
                selectedCutTypeIndex: "",
                cutTypes: [
                    {
                        value: "Ground",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "Weight",
                                selectedQuantityIndex: 0,
                                units: ["1-2lb", "2-3lb", "3-4lb"]
                            },
                        ],
                    },
                    {
                        value: "Keep",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "Weight",
                                selectedQuantityIndex: 0,
                                units: ["1-2lb", "2-3lb", "3-4lb"]
                            },
                        ],
                    },
                    {
                        value: "Smoke",
                        selectedPrepOptionIndex: 0,
                        prepTypes: [
                            {
                                value: "Weight",
                                selectedQuantityIndex: 0,
                                units: ["1-2lb", "2-3lb", "3-4lb"]
                            },
                        ],
                    },
                ],
            },
        ]
    },
]