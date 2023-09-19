$(document).ready(
    ()=>{
        console.log("Hello");
    }
)

    let val = 0;
    let dasop = 0;
    let n =0;
    let lap =0;
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

    dashboardopen = () =>{
        dasop++;
        if(dasop%2 == 1){
            document.getElementById("dashboardoption").classList.remove("dashboardoption");
            document.getElementById("dashboardoption").classList.add("dashboardoptionshow")
            document.getElementById("dashboardoptionmobile").classList.remove("dashboardoption");
            document.getElementById("dashboardoptionmobile").classList.add("dashboardoptionshow")
        }else{
            document.getElementById("dashboardoption").classList.remove("dashboardoptionshow");
            document.getElementById("dashboardoption").classList.add("dashboardoption")
            document.getElementById("dashboardoptionmobile").classList.remove("dashboardoptionshow");
            document.getElementById("dashboardoptionmobile").classList.add("dashboardoption")
        }
    }

    openmenu = () =>{
        n++;
        if(n%2 == 1){
            document.getElementById("mobileview").classList.remove("mobileview")
            document.getElementById("mobileview").classList.add("mobileviewshow"); 
        }else{
            document.getElementById("mobileview").classList.remove("mobileviewshow")
            document.getElementById("mobileview").classList.add("mobileview"); 
        }
    }

    lapnav = () =>{
        lap++;
        if(lap%2 == 1){
            document.getElementById("lapnavabar").classList.add("lapnavabar");
            document.getElementById("lapcontent").classList.remove("col-lg-10");
            document.getElementById("lapcontent").classList.add("col-lg-12");
        }else{
            document.getElementById("lapnavabar").classList.remove("lapnavabar");
            document.getElementById("lapcontent").classList.add("col-lg-10");
            document.getElementById("lapcontent").classList.remove("col-lg-12");
        }
    } 

    closemobilnav = () =>{
        document.getElementById("mobileview").classList.remove("mobileviewshow")
        document.getElementById("mobileview").classList.add("mobileview");
        document.getElementById("mobileradio").checked = false;
        n++;
    }