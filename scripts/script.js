
let val = 0;
let dasop = 0;
let n =0;
let lap =0;
    
let impressionsDiv = document.getElementsByClassName("impressions");
impressionsDiv[0].addEventListener("mouseover", (event)=>{
    document.getElementById("impressionsIcon").style.borderRadius="50%";
});
impressionsDiv[0].addEventListener("mouseout", (event)=>{
    document.getElementById("impressionsIcon").style.borderRadius="5px";
});

let goalDiv = document.getElementsByClassName("goal");
goalDiv[0].addEventListener("mouseover", (event)=>{
    document.getElementById("goalIcon").style.borderRadius="50%";
});
goalDiv[0].addEventListener("mouseout", (event)=>{
    document.getElementById("goalIcon").style.borderRadius="5px";
});

let impactDiv = document.getElementsByClassName("impact");
impactDiv[0].addEventListener("mouseover", (event)=>{
    document.getElementById("impactHandIcon").style.borderRadius="50%";
});
impactDiv[0].addEventListener("mouseout", (event)=>{
    document.getElementById("impactHandIcon").style.borderRadius="5px";
});

    check = () =>{
        val++;
        if(val%2 == 1){
            document.getElementById("check").classList.remove("option")
            document.getElementById("check").classList.add("show")
        }else{
            document.getElementById("check").classList.remove("show")
            document.getElementById("check").classList.add("option")
        }
    }

    openmenu = () =>{
        n++;
        if(n%2 == 1){
            document.getElementById("lapnavbar").classList.remove("mobile-view")
            document.getElementById("lapnavbar").classList.add("mobile-view-show"); 
            
        }else{
            document.getElementById("lapnavbar").classList.remove("mobile-view-show")
            document.getElementById("lapnavbar").classList.add("mobile-view"); 
        }
    }

    lapnav = () =>{
        lap++;
        if(lap%2 == 1){
            document.getElementById("lapnavbar").classList.add("lap-navbar");
            document.getElementById("lapcontent").classList.remove("col-lg-10");
            document.getElementById("lapcontent").classList.add("col-lg-12");
        }else{
            document.getElementById("lapnavbar").classList.remove("lap-navbar");
            document.getElementById("lapcontent").classList.add("col-lg-10");
            document.getElementById("lapcontent").classList.remove("col-lg-12");
        }
    }

let selected = 0;
let sublists = document.querySelectorAll(".dropdown-list");
document.getElementById("DashboardDropdown").style.display="block";
let navlists_header = document.querySelectorAll(".nav-list-header-div");

for(let index=0; index<navlists_header.length; index++){
    navlists_header[index].addEventListener('click', (event) => {

        for(let index1=0; index1<sublists.length; index1++){
            sublists[index1].style.display="none";  
        }
        if(selected!==index){
            event.target.parentNode.style.backgroundColor="#5ea3ef";
            navlists_header[index].style.backgroundColor = "#1f2530";
            if(selected>=0){
                navlists_header[selected].style.backgroundColor = "#293543";
                navlists_header[selected].parentElement.style.backgroundColor = "#293543";
            }
            selected=index;
            if(navlists_header[index].nextSibling.nextSibling){
                navlists_header[index].nextSibling.nextSibling.style.display="block";
                // navlists_header.childNodes[2].setAttribute("class","fa-solid fa-chevron-down fa-2xs");
            }
        }
        else{
            selected=-1;
            navlists_header[index].style.backgroundColor = "#293543";
            event.target.parentNode.style.backgroundColor="#293543";
        }
        
    });
}