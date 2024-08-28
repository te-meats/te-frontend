import { Scheduler } from '@aldabil/react-scheduler';
import Header from '@components/Header';

const Calendar = () => {
    return (
        <>
            <Header 
                title='Scheduler'
            />
            <Scheduler 
                view='week'
                agenda={false}
                height={1000}
                fields={[
                    {
                        name: "species_id",
                        type: "select",
                        options: [
                            { id: 1, text: "Cows", value: 1},
                            { id: 2, text: "Pigs", value: 2},
                            { id: 3, text: "Sheep", value: 3},
                        ],
                        config: { label: "Species", required: true, errMsg: "Please Select a Species"}
                    },
                    {
                        name: "count_id",
                        type: "input",
                        config: { label: "Count", required: true, errMsg: "Enter the number of animals to be slaughtered.", decimal: true }
                    },
                ]}
            />
        </>
    )
}

export default Calendar;