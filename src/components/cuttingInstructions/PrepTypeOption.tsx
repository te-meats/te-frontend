import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { PrepOption } from "../../interfaces.ts";
import { useState } from "react";

interface PrepOptionProps {
    prepTypes: PrepOption[]
    prepOptionIndex: number
    onChange: (name: string, value: string) => void
}

const PrepTypeOption = (props: PrepOptionProps) => {
    const [selectedPrepOption, setSelectedPrepOption] = useState<string>(props.prepTypes[props.prepOptionIndex].name);
    const [selectedQuantity, setSelectedQuantity] = useState<string>(props.prepTypes[props.prepOptionIndex].quantities[props.prepTypes[props.prepOptionIndex].selectedQuantityIndex]);
    const [quantityList, setQuantityList] = useState<string[]>(props.prepTypes[props.prepOptionIndex].quantities);

    const handlePrepOptionChange = (e: SelectChangeEvent) => {
        setSelectedPrepOption(e.target.value);
        const newPrepOptionIndex = props.prepTypes.findIndex((prepOption) => prepOption.name === e.target.value);
        setQuantityList(props.prepTypes[newPrepOptionIndex].quantities);
        setSelectedQuantity(props.prepTypes[newPrepOptionIndex].quantities[0]);
        props.onChange(e.target.name, e.target.value);
    }

    const handleQuantityChange = (e: SelectChangeEvent) => {
        setSelectedQuantity(e.target.value);
        props.onChange(e.target.name, e.target.value);
    }

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id={"Preparation"}>Preparation</InputLabel>
                <Select
                    labelId={"Preparation"}
                    id={"Preparation"}
                    label={"Preparation"}
                    name={"prepType"}
                    onChange={handlePrepOptionChange}
                    value={selectedPrepOption}
                    variant={"filled"}
                >
                    {props.prepTypes.map(prepType => (
                        <MenuItem
                            key={prepType.id}
                            value={prepType.name}
                        >
                            {prepType.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id={"Quantity"}>Quantity</InputLabel>
                <Select
                    labelId={"Quantity"}
                    id={"Quantity"}
                    label={"Quantity"}
                    name={"quantity"}
                    onChange={handleQuantityChange}
                    value={selectedQuantity}
                    variant={"outlined"}
                >
                    {quantityList.map((quantity, index) => (
                        <MenuItem
                            key={index}
                            value={quantity}
                        >
                            {quantity}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default PrepTypeOption;