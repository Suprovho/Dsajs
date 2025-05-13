
function maxMeetings(start, end) {
    let meetings=[];
    let n=start.length;
    for (let i = 0; i <n ; i++) {
      meetings.push({start:start[i],end:end[i]});
    }
   
    //  Sort meetings by their end time

    meetings.sort((a,b)=>a.end-b.end);
     
    // Select meetings greedily

    let count=1;
    let lastEnd=meetings[0].end;

    for (let i = 1; i < n; i++) {
       if (meetings[i].start > lastEnd) {
          count++;
          lastEnd=meetings[i].end;
       }        
    }

    return count;

}
