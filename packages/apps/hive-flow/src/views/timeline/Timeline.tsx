import React, { useEffect, useState } from 'react';
import {Timeline} from '@hexhive/ui'
//import utils from '../../utils';
import moment from 'moment';
import { stringToColor } from '@hexhive/utils';
import { Box } from 'grommet';
import { useQuery } from '../../gqless';

interface TimelineProps {

}

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

const BaseTimeline : React.FC<TimelineProps> = (props) => {
    const [ date, setDate ] = useState<Date>(new Date())
    const [ horizon, setHorizon ] = useState<{start: Date, end: Date} | undefined>()

    const [ data, setData ] = useState<any[]>([
        {
            id: 3,
            color: 'purple',
            name: "Test",
            start: new Date(2021, 2, 12),
            end: new Date(2021, 5, 9)
          },
          {
            id: 2,
            color: 'orange',
            name: "Test",
            start: new Date(2021, 7, 12),
            end: new Date(2021, 12, 9)
          }
    ])


    const query = useQuery({
        suspense: false,
        staleWhileRevalidate: true
    })

    const quotes = query.QuoteMany()?.map((quote) => ({
        start: new Date(moment(quote?.date).startOf('isoWeek').valueOf()),
        end: new Date(moment(quote?.date).endOf('isoWeek').valueOf()),
        ...quote,
        showLabel: formatter.format((quote as any).price),
        color: stringToColor(quote?.name || '')
    }))

    useEffect(() => {
        // utils.quote.getAll().then((quotes) => {
            
        //   setData(quotes.map((x: any) => 
        //   {
        //       let start = new Date(moment(x.StartDate).startOf('isoWeek').valueOf())
        //       let end =  new Date(moment(start).add(7, 'days').valueOf())

        //       console.log(start, end)
        //   return {
        //        id: `${x?.QuoteID}`, 
        //        status: x?.Status,
        //        color: stringToColor(x?.Name), 
        //        name: x?.Name, 
        //        start: start,
        //        showLabel: formatter.format(parseInt(x?.TotalLinePrice?.toFixed(0) || 0)),
        //        end: end,
        //        price: parseInt(x?.TotalLinePrice?.toFixed(0)) || 0 
        //     }
        //   }))
        // })
    }, [])

    useEffect(() => {
        let year = moment(horizon?.start).get('year')
        let oldYear = moment(date).get('year')
        if(year != oldYear){
            if(horizon?.start) setDate(horizon?.start)

            // utils.quote.fetchMonthQuotes(year).then((quotes) => {
            //     console.log(quotes)

            //     setData(quotes.map((x: any) => 
            //     {
            //         let start = new Date(moment(x.StartDate).startOf('isoWeek').valueOf())
            //         let end =  new Date(moment(start).add(7, 'days').valueOf())
      
            //         console.log(start, end)
            //     return {
            //          id: `${x?.QuoteID}`, 
            //          status: x?.Status,
            //          color: stringToColor(x?.Name), 
            //          name: x?.Name, 
            //          start: start,
            //          showLabel: formatter.format(parseInt(x?.TotalLinePrice?.toFixed(0) || 0)),
            //          end: end,
            //          price: parseInt(x?.TotalLinePrice?.toFixed(0)) || 0 
            //       }
            //     }))

            // })
        }
    }, [horizon?.start])

    const getWeeks = () => {
        const weeks = filterData()?.reduce((previous, current) => {
            console.log(current)
            let start = current.start.getTime();
            if(!previous[start]) previous[start] = 0;
            previous[start] += current.price 
            return previous
        }, {})  
        console.log(weeks)
        return Object.keys(weeks).map((start, ix) => {
            return {
                id: start,
                name: `Week ${moment(new Date(parseInt(start))).format("W")}`,
                color: stringToColor(moment(new Date(parseInt(start))).format("DD/mm/yyyy")),
                start: new Date(parseInt(start)),
                end: new Date(moment(new Date(parseInt(start))).add(7, 'days').valueOf()),
                showLabel: formatter.format(weeks[start])
            }
        })
    }



    const onHorizonChange = (start: any, end: any) => {
        console.log("Horizon", start, end)
        setHorizon({start, end})

        // let result = DATA.filter((item) => {
        //   return (item.start < start && item.end > end) || (item.start > start && item.start < end) || (item.end > start && item.end < end);
        // });
        // console.log('Calculating ');
        // this.setState({ data: result });
      };

      const filterData = () => {
        if(horizon && horizon.start && horizon.end){
        return quotes?.filter((item) => {
            return (item.start < horizon.start && item.end > horizon.end) || (item.start > horizon.start && item.start < horizon.end) || (item.end > horizon.start && item.end < horizon.end);
          });
        }else{
            return data;
        }   
    }
    return (
        <Box 
            overflow="hidden"
            flex 
            round="small">
        <Timeline 
            resizable
            mode="month"
            links={[]}
            data={getWeeks()}
            date={date}
            onHorizonChange={onHorizonChange}
            itemheight={30}
            />
        </Box>
    )
}

export default BaseTimeline;