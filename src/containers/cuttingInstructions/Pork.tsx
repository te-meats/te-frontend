import Cut from "@components/cuttingInstructions/Cut";
import PrepRadioGroup from "@components/cuttingInstructions/PrepRadioGroup";
import PrepTypeRadioOption from "@components/cuttingInstructions/PrepTypeRadioOption";
import Primal from "@components/cuttingInstructions/Primal";
import { SelectChangeEvent } from "@mui/material";
import { cuts, cutTypes, primals } from "@utils/strings";
import { useEffect, useState } from "react";

const Pork = () => {
    interface Cut {
        cutType: string,
        prepType: string,
        done?: boolean,
        // secondaryPrepType: string,
        unit: string,
    };

    interface DoneChecklist {
        [key: string]: boolean
    }

    interface PorkIns {
        [key: string]: {
            [key: string]: Cut,
        },
        // shoulder?: {
        //     picnicRoast?: Cut,
        //     bostonButt?: Cut,
        //     backBone?: Cut,
        //     jowl?: Cut,
        //     done?: boolean,
        // },
        // loin?: {
        //     loin?: Cut,
        //     fishLoin?: Cut,
        //     done?: boolean,
        // },
        // side?: {
        //     ribs?: Cut,
        //     sideMeat?: Cut,
        //     done?: boolean,
        // },
        // hams?: {
        //     uncuredFreshHam?: Cut,
        //     sweetheartHam?: Cut,
        //     hocks?: Cut,
        //     done?: boolean,
        // },
    };

    const [porkIns, setPorkIns] = useState<PorkIns>({ 
        shoulder: {
            picnicRoast: { cutType: "", prepType: "", unit: "", done: false },
            bostonButt: { cutType: "", prepType: "", unit: "", done: false },
            backBone: { cutType: "", prepType: "", unit: "", done: false },
            jowl: { cutType: "", prepType: "", unit: "", done: false },
        },
        loin: {
            loin: { cutType: "", prepType: "", unit: "", done: false },
            fishLoin: { cutType: "", prepType: "", unit: "", done: false },
        },
        side: {
            ribs: { cutType: "", prepType: "", unit: "", done: false },
            sideMeat: { cutType: "", prepType: "", unit: "", done: false },
        },
        hams: {
            uncuredFreshHam: { cutType: "", prepType: "", unit: "", done: false },
            sweetheartHam: { cutType: "", prepType: "", unit: "", done: false },
            hocks: { cutType: "", prepType: "", unit: "", done: false },
        },
    });

    const [doneChecklist, setDoneChecklist] = useState<DoneChecklist>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, primalKey: string, cutKey: string) => {
        setPorkIns({
            ...porkIns,
            [primalKey]: { ...porkIns[primalKey as keyof PorkIns], [cutKey]: { unit: "", cutType: e.target.value, prepType: e.target.value, done: true }}
        });
    };

    const handleUnitChange = (e: SelectChangeEvent<string>) => {
        console.log('test');
    }

    useEffect(() => {
        let newChecklist = doneChecklist;
        for (const [key, value] of Object.entries(porkIns)) {
            for (const [key1, value1] of Object.entries(porkIns[key])) {
                if (porkIns[key][key1].done) {
                    newChecklist = {
                        ...newChecklist,
                        [key]: true,
                    }
                } else {
                    newChecklist = {
                        ...newChecklist,
                        [key]: false,
                    }
                }
            }
        }

        setDoneChecklist(newChecklist);
    }, [porkIns])

    return (
        <>
            <Primal name={primals.shoulder} done={doneChecklist?.shoulder}>
                <Cut name={cuts.picnicRoast} done={porkIns?.shoulder?.picnicRoast?.done}>
                    <PrepRadioGroup primalKey={"shoulder"} cutKey={"picnicRoast"} onChange={handleChange}>
                        <PrepTypeRadioOption
                            name={cutTypes.ground}
                            selected={porkIns?.shoulder?.picnicRoast?.prepType}
                            unit={porkIns?.shoulder?.picnicRoast?.unit}
                            onUnitChange={handleUnitChange}
                        />
                        <PrepTypeRadioOption name={cutTypes.boneless} selected={porkIns?.shoulder?.picnicRoast?.prepType} unit={porkIns?.shoulder?.picnicRoast?.unit} onUnitChange={handleUnitChange}/>
                    </PrepRadioGroup>
                </Cut>
                {/* <Cut name={cuts.bostonButt} done={porkIns?.shoulder?.bostonButt?.done}>
                    <PrepRadioGroup primalKey={"shoulder"} cutKey={"bostonButt"} onChange={handleChange}>
                        <PrepTypeRadioOption name={cutTypes.boneless} selected={porkIns?.shoulder?.bostonButt?.prepType} />
                        <PrepTypeRadioOption name={cutTypes.boneIn} selected={porkIns?.shoulder?.bostonButt?.prepType} />
                        <PrepTypeRadioOption name={cutTypes.ground} selected={porkIns?.shoulder?.bostonButt?.prepType} />
                        <PrepTypeRadioOption name={cutTypes.shoulderBacon} selected={porkIns?.shoulder?.bostonButt?.prepType} />
                    </PrepRadioGroup>
                </Cut>
                <Cut name={cuts.backBone} done={porkIns?.shoulder?.backBone?.done}>
                    <PrepRadioGroup primalKey={"shoulder"} cutKey={"backBone"} onChange={handleChange}>
                        <PrepTypeRadioOption name={cutTypes.keep} selected={porkIns?.shoulder?.backBone?.prepType} />
                        <PrepTypeRadioOption name={cutTypes.ground} selected={porkIns?.shoulder?.backBone?.prepType} />
                    </PrepRadioGroup>
                </Cut>
                <Cut name={cuts.jowl} done={porkIns?.shoulder?.jowl?.done}>
                    <PrepRadioGroup primalKey={"shoulder"} cutKey={"jowl"} onChange={handleChange}>
                        <PrepTypeRadioOption name={cutTypes.keep} selected={porkIns?.shoulder?.jowl?.prepType} />
                        <PrepTypeRadioOption name={cutTypes.ground} selected={porkIns?.shoulder?.jowl?.prepType} />
                        <PrepTypeRadioOption name={cutTypes.smoke} selected={porkIns?.shoulder?.jowl?.prepType} />
                    </PrepRadioGroup>
                </Cut>
            </Primal>
            <Primal name={primals.loin} done={doneChecklist?.loin}>
                <Cut name={cuts.loin} done={porkIns?.loin?.loin?.done}>
                    <PrepRadioGroup primalKey={"loin"} cutKey={"loin"} onChange={handleChange}>
                        <PrepTypeRadioOption name={cutTypes.boneIn} selected={porkIns?.loin?.loin?.prepType} />
                        <PrepTypeRadioOption name={cutTypes.boneless} selected={porkIns?.loin?.loin?.prepType} />
                        <PrepTypeRadioOption name={cutTypes.ground} selected={porkIns?.loin?.loin?.prepType} />
                        <PrepTypeRadioOption name={cutTypes.canadianBacon} selected={porkIns?.loin?.loin?.prepType} />
                    </PrepRadioGroup>
                </Cut>
                <Cut name={cuts.fishLoin} done={porkIns?.loin?.fishLoin?.done}>
                    <PrepRadioGroup primalKey={"loin"} cutKey={"fishLoin"} onChange={handleChange}>
                        <PrepTypeRadioOption name={cutTypes.keep} selected={porkIns?.loin?.fishLoin?.prepType} />
                    </PrepRadioGroup>
                </Cut>
            </Primal>
            <Primal name={primals.side} done={doneChecklist?.side}>
                <Cut name={cuts.ribs} done={porkIns?.side?.ribs?.done}>
                    <PrepRadioGroup primalKey={"side"} cutKey={"ribs"} onChange={handleChange}>
                        <PrepTypeRadioOption name={cutTypes.split} selected={porkIns?.side?.ribs?.prepType} />
                        <PrepTypeRadioOption name={cutTypes.full} selected={porkIns?.side?.ribs?.prepType} />
                    </PrepRadioGroup>
                </Cut>
                <Cut name={cuts.sideMeat} done={porkIns?.side?.sideMeat?.done}>
                    <PrepRadioGroup primalKey={"side"} cutKey={"sideMeat"} onChange={handleChange}>
                        <PrepTypeRadioOption name={cutTypes.smoke} selected={porkIns?.side?.sideMeat?.prepType} />
                        <PrepTypeRadioOption name={cutTypes.unsmoked} selected={porkIns?.side?.sideMeat?.prepType} />
                        <PrepTypeRadioOption name={cutTypes.ground} selected={porkIns?.side?.sideMeat?.prepType} />
                    </PrepRadioGroup>
                </Cut>
            </Primal>
            <Primal name={primals.hams} done={doneChecklist?.hams}>
                <Cut name={cuts.uncuredFreshHam} done={porkIns?.hams?.uncuredFreshHam?.done}>
                    <PrepRadioGroup primalKey={"hams"} cutKey={"uncuredFreshHam"} onChange={handleChange}>
                        <PrepTypeRadioOption name={cutTypes.boneIn} selected={porkIns?.hams?.uncuredFreshHam?.prepType} />
                        <PrepTypeRadioOption name={cutTypes.boneless} selected={porkIns?.hams?.uncuredFreshHam?.prepType} />
                        <PrepTypeRadioOption name={cutTypes.ground} selected={porkIns?.hams?.uncuredFreshHam?.prepType} />
                    </PrepRadioGroup>
                </Cut>
                <Cut name={cuts.sweetheartHam} done={porkIns?.hams?.sweetheartHam?.done}>
                    <PrepRadioGroup primalKey={"hams"} cutKey={"sweetheartHam"} onChange={handleChange}>
                        <PrepTypeRadioOption name={cutTypes.keep} selected={porkIns?.hams?.sweetheartHam?.prepType} />
                        <PrepTypeRadioOption name={cutTypes.ground} selected={porkIns?.hams?.sweetheartHam?.prepType} />
                    </PrepRadioGroup>
                </Cut>
                <Cut name={cuts.hocks} done={porkIns?.hams?.hocks?.done}>
                    <PrepRadioGroup primalKey={"hams"} cutKey={"hocks"} onChange={handleChange}>
                        <PrepTypeRadioOption name={cutTypes.keep} selected={porkIns?.hams?.hocks?.prepType} />
                        <PrepTypeRadioOption name={cutTypes.ground} selected={porkIns?.hams?.hocks?.prepType} />
                        <PrepTypeRadioOption name={cutTypes.smoke} selected={porkIns?.hams?.hocks?.prepType} />
                    </PrepRadioGroup>
                </Cut> */}
            </Primal>
        </>
    );
};

export default Pork;