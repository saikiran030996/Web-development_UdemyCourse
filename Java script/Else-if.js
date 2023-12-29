const dayOfWeek = "Friday";

if (dayOfWeek === "Monday") {
    console.log("Ughh I hate Mondays")
}
else if (dayOfWeek === "Saturday") {
    console.log("Yay I love Saturdays")
}

else if (dayOfWeek === "Friday") {
    console.log("Fridays are decent, especially after work")
}

// 0 - 5 FREE
// 5 - 10 CHILD $10
// 10 - 65 ADULT $20
// 65+ SENIOR $10
// if and else if 



const age = 15;
if (age < 5) {
    console.log(`You are a child with age ${age}. You get it for free`)
}
else if (age < 10) {
    console.log(`You are a child with age ${age}. You get it for $10`)
}
else if (age < 65) {
    console.log(`You are an adult with age ${age}. You get it for $20 `)
}
else if (age > 65) {
    console.log(`You are a senior with age ${age}. You get it for $10`)
}