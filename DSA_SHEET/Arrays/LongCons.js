var longestConsecutive = function (arr) {
    if(arr.length==0) return 0

    let count=1, max = 1
    arr.sort((a, b) => a - b)                       // Step1:  Sort karo

    for(let i=0; i<arr.length; i++) {

        if(arr[i]- arr[i-1] == 1) {                 // Step2 : Aur dekho ki, [mai - mere_se_pichla_elem == 1?]
            count=count+1 ;                         //         hua, toh bas count kr lo 
            max = Math.max(max, count)              //         count krne ke saath saath,  maxLength bhi note krte jaa rhe hum
                                                    //         Ek time aisa ayega, ki, consecutive ginn'ne ka streak tut jyega, aur count phirse apne ko 1 se suru krna pdega 
                                                    //         example : [1 2 3 4 6 7]
                                                    //                   isme 1234 ka streak rhega, phir 6 pe tut jyega
                                                    //                   toh 1234 ke liye count aur max dono = 4. 
                                                    //                   6 pe tuta, so, count became 1 (look in else condition)
                                                    //                   so, 67 ke liye, count=2 , aur max = Math.max(4{from 1234}, 2{from 67})
        } 

        else if(arr[i]==arr[i-1]) continue          // yeh step LEARNING hai tere liye. nahi toh tu toh SET laga rha tha       duplicate hataane ke liye
  
        else {
            count = 1
        }
       
    }
    return max
};
