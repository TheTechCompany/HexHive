# HexHive Collector

The bees of the ecosystem, hexhive collector is the transition layer between data producing endpoints and the hive data layer

## Get Started

```
import HiveCollector from '@hexhive/collector';

const collector = new HiveCollector({
	flightTime: '2m', //How often does each bee do a return flight
	packSize: 10 //How much can each bee hold
});

while(true){
	collector.pack('metric_key', {value: 1})
}
```