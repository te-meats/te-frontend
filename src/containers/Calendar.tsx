import { createSchedulerEvent, deleteSchedulerEvent, fetchSchedulerEvents, updateSchedulerEvent } from '@actions/scheduler';
import { Scheduler } from '@aldabil/react-scheduler';
import { EventActions, ProcessedEvent } from '@aldabil/react-scheduler/types';
import Header from '@components/Header';
import { useAppDispatch, useAppSelector } from '@hooks/hooks';
import { useEffect, useState } from 'react';

const Calendar = () => {
    const dispatch = useAppDispatch();

    const events = useAppSelector((state) => state.scheduler.events);
    const eventsLoading = useAppSelector((state) => state.scheduler.pending);
    const [fetchedEvents, setFetchedEvents] = useState<Array<ProcessedEvent>>([])

    useEffect(() => {
        dispatch(fetchSchedulerEvents());
    }, []);

    useEffect(() => {
        const data = events.map(event => ({
            event_id: event.id,
            title: event.title,
            start: new Date(event.start),
            end: new Date(event.end),
        }));
        setFetchedEvents(data);
    }, [events])

    const handleConfirm = (event: ProcessedEvent, action: EventActions): Promise<ProcessedEvent> => {
        if (action === 'create') {
            dispatch(createSchedulerEvent(event));
        }

        else if (action === 'edit') {
            const data = {
                id: event.event_id as string,
                title: event.title,
                start: event.start,
                end: event.end,
            }
            dispatch(updateSchedulerEvent(data));
        }

        // TODO: Remove this once a custom modal is created for the scheduler.
        return new Promise(() => {

        });
    };

    const handleDelete = (id: string): Promise<string> => {
        dispatch(deleteSchedulerEvent({ id }));

        return new Promise(() => {

        });
    }


    return (
        <>
            <Header 
                title='Scheduler'
            />
            <Scheduler 
                view='week'
                agenda={false}
                height={1000}
                // fields={[
                //     {
                //         name: "species_id",
                //         type: "select",
                //         options: [
                //             { id: 1, text: "Cows", value: 1},
                //             { id: 2, text: "Pigs", value: 2},
                //             { id: 3, text: "Sheep", value: 3},
                //         ],
                //         config: { label: "Species", required: true, errMsg: "Please Select a Species"}
                //     },
                //     {
                //         name: "count_id",
                //         type: "input",
                //         config: { label: "Count", required: true, errMsg: "Enter the number of animals to be slaughtered.", decimal: true }
                //     },
                // ]}
                events={fetchedEvents}
                loading={eventsLoading}
                onConfirm={handleConfirm}
                onDelete={handleDelete}
            />
        </>
    )
}

export default Calendar;