import { OrderAgonisticBs } from "./BinarySearch";
import { PeakInMountainArray } from "./PeakInMountainArray";

function Search(arr,target) {
    let peak=PeakInMountainArray(arr)
    let firstTry=OrderAgonisticBs(arr,target,0,peak);
    if (firstTry!=-1) {
        return firstTry;
    }
    else return OrderAgonisticBs(arr,target,peak+1,arr.length-1);
}


