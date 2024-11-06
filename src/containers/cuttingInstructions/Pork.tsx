import Primal from "@components/cuttingInstructions/Primal";
import { useEffect, useState } from "react";
import { CutSheetFormData, CutSheetState, PrimalFormData } from "src/interfaces";
import { porkInstructionFormData } from "../../formData.ts";

const Pork = () => {
    // TODO: Fetch this initial data from the backend
    const [porkInstructions, setPorkInstructions] = useState<CutSheetFormData>(porkInstructionFormData);

    const [data, setData] = useState<CutSheetState>({
        primals: [],
    });

    useEffect(() => {
        const newData: CutSheetState = {
            primals: []
        };
        newData.primals = porkInstructionFormData.primals.map(primal => (
            {
                id: primal.id,
                primal: primal.name,
                cuts: primal.cuts.map(cut => {
                    const prepOptionIndex = cut.cutTypes[cut.cutTypeIndex].selectedPrepOptionIndex;
                    const quantityIndex = cut.cutTypes[cut.cutTypeIndex].prepTypes[prepOptionIndex].selectedQuantityIndex;
                    return ({
                        id: cut.id,
                        cut: cut.name,
                        cutType: cut.cutTypes[cut.cutTypeIndex].name,
                        prepType: cut.cutTypes[cut.cutTypeIndex].prepTypes[prepOptionIndex].name,
                        quantity: cut.cutTypes[cut.cutTypeIndex].prepTypes[prepOptionIndex].quantities[quantityIndex],
                    })
                })
            }
        ));
        setData(newData);
    }, [])

    const handleChange = (primal: PrimalFormData) => {
        const updatedPrimals = data?.primals.map(originalPrimal => {
            if (primal.id === originalPrimal.id) {
                return primal;
            } else {
                return originalPrimal;
            }
        });

        setData({
            ...data,
            primals: updatedPrimals,
        });
        console.log(primal.cuts);
    }

    return (
        <>
            {porkInstructionFormData.primals.map(primalForm => {
                return (
                    <Primal key={primalForm.id}
                            primalForm={primalForm}
                            onChange={handleChange}
                            primalState={data.primals[primalForm.id]}
                    />
                );
            })}
        </>
    );
};

export default Pork;