import Cut from "@components/cuttingInstructions/Cut";
import PrepRadioGroup from "@components/cuttingInstructions/PrepRadioGroup";
import PrepTypeRadioOption from "@components/cuttingInstructions/PrepTypeRadioOption";
import Primal from "@components/cuttingInstructions/Primal";
import React, {useState} from "react";
import {PrimalType} from "src/interfaces";
import {porkInstructionFormData} from "../../formData.ts";

const Pork = () => {
    interface DoneChecklist {
        [key: string]: boolean
    }

    // TODO: Fetch this initial data from the backend
    const [porkInstructions, setPorkInstructions] = useState<Array<PrimalType>>(porkInstructionFormData);

    const [doneChecklist, setDoneChecklist] = useState<DoneChecklist>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, primalIndex: number, cutIndex: number) => {
        const updatedInstructions = porkInstructions;
        updatedInstructions[primalIndex].cuts[cutIndex] = {
            ...updatedInstructions[primalIndex].cuts[cutIndex],
            selectedCutTypeIndex: e.target.value,
        }
        setPorkInstructions([
            ...updatedInstructions,
        ]);
    };

    const handlePrepTypeChange = (primalIndex: number, cutIndex: number, cutTypeIndex: number, selectedPrepOptionIndex: number, selectedQuantityIndex: number) => {
        const updatedInstructions = porkInstructions;
        updatedInstructions[primalIndex].cuts[cutIndex].cutTypes[cutTypeIndex] = {
            ...updatedInstructions[primalIndex].cuts[cutIndex].cutTypes[cutTypeIndex],
            selectedPrepOptionIndex: selectedPrepOptionIndex,
        };

        updatedInstructions[primalIndex].cuts[cutIndex].cutTypes[cutTypeIndex].prepTypes[selectedPrepOptionIndex] = {
            ...updatedInstructions[primalIndex].cuts[cutIndex].cutTypes[cutTypeIndex].prepTypes[selectedPrepOptionIndex],
            selectedQuantityIndex: selectedQuantityIndex,
        };

        setPorkInstructions([
            ...updatedInstructions,
        ]);
    }

    // TODO: Rework this useEffect
    // useEffect(() => {
    //     let newChecklist = doneChecklist;
    //     for (const [key] of Object.entries(porkIns)) {
    //         for (const [key1] of Object.entries(porkIns[key])) {
    //             if (porkIns[key][key1].done) {
    //                 newChecklist = {
    //                     ...newChecklist,
    //                     [key]: true,
    //                 }
    //             } else {
    //                 newChecklist = {
    //                     ...newChecklist,
    //                     [key]: false,
    //                 }
    //             }
    //         }
    //     }
    //
    //     setDoneChecklist(newChecklist);
    // }, [porkIns])

    return (
        <>
            {porkInstructions && (
                porkInstructions.map((porkIns, primalIndex) => {
                    return (
                        <Primal name={porkIns.value} key={`primal-${primalIndex}`}>
                            {porkIns.cuts.map((cut, cutIndex) =>
                                <Cut name={cut.value} key={`cut-${cutIndex}`}>
                                    <PrepRadioGroup
                                        onChange={handleChange}
                                        primalIndex={primalIndex}
                                        cutIndex={cutIndex}
                                    >
                                        {cut.cutTypes.map((cutType, cutTypeIndex) =>
                                            <PrepTypeRadioOption
                                                key={`cutType-${cutTypeIndex}`}
                                                selected={cut.selectedCutTypeIndex}
                                                name={cutType.value}
                                                options={cutType.prepTypes}
                                                onUnitChange={handlePrepTypeChange}
                                                primalIndex={primalIndex}
                                                cutIndex={cutIndex}
                                                cutTypeIndex={cutTypeIndex}
                                                selectedPrepTypeIndex={cutType.selectedPrepOptionIndex}
                                                selectedUnitIndex={cutType.prepTypes[cutType.selectedPrepOptionIndex].selectedQuantityIndex}
                                            />
                                        )}
                                    </PrepRadioGroup>
                                </Cut>
                            )}
                        </Primal>
                    )
                }))
            }
        </>
    );
};

export default Pork;