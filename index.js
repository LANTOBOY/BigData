window.onload=()=>{
    document.querySelector('.dropbtn_click').onclick = ()=>{
      dropdown();
    }
    // document.getElementsByClassName('drop_value').onclick = ()=>{
    //   showMenu(value);
    // };
    dropdown = () => {
      var v = document.querySelector('.dropdown-content');
      var dropbtn = document.querySelector('.dropbtn')
      v.classList.toggle('show');
      dropbtn.style.borderColor = 'rgb(94, 94, 94)';
    }

    // showMenu=(value)=>{
    //   var dropbtn_content = document.querySelector('.dropbtn_content');
    //   var dropbtn_click = document.querySelector('.dropbtn_click');
    //   var dropbtn = document.querySelector('.dropbtn');

    //   dropbtn_icon.innerText = '';
    //   dropbtn_content.innerText = value;
    //   dropbtn_content.style.color = '#252525';
    //   dropbtn.style.borderColor = '#3992a8';
    // }
  }
  function showToggleYear(){
    var con = document.getElementById("dropdown-year");
    if(con.style.display == "none"){
      con.style.display = "block";
    }
    else{
      con.style.display = "none";
    }
  }
  function showToggleFilter(){
    var con = document.getElementById("dropdown-filter");
    if(con.style.display == "none"){
      con.style.display = "block";
    }
    else{
      con.style.display = "none";
    }
  }

  function showMenu(txt){
    var yearTitle = document.getElementById("year_title");
    yearTitle.innerText = txt;
  }

  function showMenu2(txt){
    var yearTitle = document.getElementById("filter_title");
    yearTitle.innerText = txt;
  }

  function valueSubmit(){
    var yearValue = document.getElementById("year_title").innerText;
    var filterValue = document.getElementById("filter_title").innerText;
    var srcName = yearValue+filterValue+".html"
    document.getElementById("mapViewer").src = srcName;
  }


  