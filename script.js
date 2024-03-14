const countries=[
    {name:"India", flag:"IN"},
    {name:"Australia", flag:"AUS"},
    {name:"Afganistan", flag:"AFG"},
    {name:"Bangladesh", flag:"BAN"},
    {name:"Ireland", flag:"IRE"},
    {name:"New Zeland", flag:"NZ"},
    {name:"Pakistan", flag:"PAK"},
]

const headernames=[
    "S.no",
    "Name",
    "Flag",
    "Country",
    "Score",
    "Modify Score",
    "Delete",
]
const form=document.querySelector("form");
const table=document.querySelector("table");
const select=document.querySelector("form select");
const fnameInput=document.querySelector("#fname")
const lnameInput=document.querySelector("#lname")
const scoreInput=document.querySelector("#score")

let counter=1;

countries.forEach((country)=>{
    const option=document.createElement("option")
    option.innerHTML=country.name;
    option.value=country.name;
    select.append(option);
})

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    if(table.children.length===0) createTH();
    const tr=document.createElement("tr");

    //Serial Number
    const sno=document.createElement("td")
    sno.innerHTML=counter++;
    tr.append(sno)

    const name=document.createElement("td")
    name.innerHTML=fnameInput.value+" "+lnameInput.value;
    tr.append(name)

    const flag=document.createElement("td")
    flag.innerHTML=getFlag(select.value);
    tr.append(flag)


    const country=document.createElement("td")
    country.innerHTML=select.value;
    tr.append(country)

    
    const score=document.createElement("td")
    score.innerHTML=scoreInput.value;
    tr.append(score)

    const modify=document.createElement("td")
    const plus5=document.createElement("span")
    plus5.classList.add("circle","green")
    plus5.innerHTML="+5"
    plus5.addEventListener("click",()=>{
        plus5.parentElement.previousElementSibling.innerHTML=Number(plus5.parentElement.previousElementSibling.innerHTML)+5;
    })

    const minus5=document.createElement("span")

    minus5.classList.add("circle","red")
    minus5.innerHTML="-5"
    minus5.addEventListener("click",()=>{
        minus5.parentElement.previousElementSibling.innerHTML-=5
    })
    modify.append(plus5)
   
    modify.append(minus5)
    tr.append(modify)

    const del=document.createElement("td")
    del.innerHTML="<i class='fa fa-trash'></i>"
    tr.append(del)
    del.addEventListener("click",()=>{
        del.parentElement.remove()
    })
    table.append(tr)

    fnameInput.value="";
    lnameInput.value="";
    scoreInput.value="";
    select.value="";
});

//CLEAR Form OUT


function getFlag(countryname){
    let output=""
    countries.forEach((country)=>{
        if(country.name===countryname) output= country.flag
    })
    return output;
}

function createTH()
{
    const tr=document.createElement("tr")
    for(let i=0;i<headernames.length;i++)
    {
        const th=document.createElement("th")
        th.innerHTML=headernames[i]
        tr.append(th)
    }
    table.append(tr);
}

