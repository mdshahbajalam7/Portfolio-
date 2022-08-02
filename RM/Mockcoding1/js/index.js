
const data = JSON.parse(localStorage.getItem("country")) || []
// console.log(data)
function handlechange(){
    let ans = document.getElementById("search").value
    setTimeout(() => {
        searchdata(ans)
    }, 1000);
}

function searchdata(ans){
    const result = ans.replace(/([A-Z])/g,"$1");
    const finalresult = result.charAt(0).toUpperCase()+result.slice(1);
    let result1 = data.filter((elem)=>elem.countryName.includes(finalresult))
    console.log(result1)

    document.getElementById("resultdata").innerHTML=""
    result1.map((elem,index)=>{
        let textcountry = document.createElement("p")
        // textcountry.setAttribute("id","countrys")
        textcountry.innerText=elem.countryName
        document.getElementById("resultdata").appendChild(textcountry)
    })
}