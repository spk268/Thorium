let persons = [
    {
        name: "Pushpa Raj",
        age: 32,
        votingStatus: false
    },
    {
        name: "Peter Parker",
        age: 28,
        votingStatus: false
    },
    {
        name: "Dr. Octopus",
        age: 70,
        votingStatus: false
    },
    {
        name: "Raju Rastogi",
        age: 25,
        votingStatus: false
    },
    {
        name: "Mr. Grey",
        age: 30,
        votingStatus: false
    }
]

router.post("/election", function (req, res) {
    let votingAge = req.query.votingAge

    let mahir=[];
    for (let i = 0; i < persons.length; i++) {

        if (persons[i].age > votingAge) {
        
            persons[i].votingStatus = true
            mahir.push(persons[i])
        }
    }
if (mahir.length>0)
{
    return res.send(mahir)
}
else{
    return res.send("No member found above this age")
    }
})