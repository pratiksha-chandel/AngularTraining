//Created by: Pratiksha Chandel
// Date: 9 june 2020
// Assessment : Typescript: Advance Feature
// topic : Contextually type expression and object

interface CuboidProperties{
    height: number;
    width: number;
    depth:number;
}
 interface Calculator{

 cuboidVolume :(props: CuboidProperties) => void;
 cuboidArea: (props: CuboidProperties) => void;
 }

 function CuboidMetrics (metrics : Calculator)
 {
     //todo
 }
 CuboidMetrics({
    cuboidVolume: v => {v.height * v.width * v.depth},
    cuboidArea: a => {2 *(a.height * a.width) + (a.height * a.depth) + (a.depth * a.width)}
 });