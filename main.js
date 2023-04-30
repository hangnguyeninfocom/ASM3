// compare to appear private info
function handleSubmit(){
    const emailValue=document.getElementById('email').value.toLocaleLowerCase();
    const regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errorEmail=document.getElementById('error-email');
    const checkMail=emailValue.match(regex);
    const sectionContent=document.querySelector('#personal-info .personal-info_detail');
    const submitControl=document.querySelector('.submit-email');

    if(checkMail){
        sectionContent.style.display='block';
        submitControl.style.display='none';
        errorEmail.innerHTML='';
    }else{
        errorEmail.innerHTML='Vui lòng nhập đúng định dạng email!';
    }
}

function handleOnMouseOver(element)
{
    const viewMore=element.querySelector('.control-view');
    viewMore.style.display='inline-block'
}
function handleOnMouseOut(element)
{
    const viewMore=element.querySelector('.control-view');
    if(!viewMore.classList.value.includes('less-more')){
    viewMore.style.display='none'   
}
}
// view more and less more for experience, education, active
function handleViewMore(element){
    const parentElement=element.closest('.job-detail');
    const viewMore=parentElement.querySelector('.control-view');
    const sectionContent=parentElement.querySelectorAll('.job-detail_row');
  
    if (viewMore.classList.value.includes('view-more')){        
        sectionContent.forEach((element)=>{
            element.style.display='inline-block';
        })  
        viewMore.classList.remove('view-more');
        viewMore.classList.add('less-more');
        viewMore.innerHTML='Less more';
    } else{
        
        sectionContent.forEach((element)=>{
            element.style.display='none';
        })  
        viewMore.classList.remove('less-more');
        viewMore.classList.add('view-more');
        viewMore.innerHTML='View more';
    }
    
}
// // view more and less more for hobby
function handleViewMoreHobby(element)
{
    const parentElement=element.closest('.job-detail');
    const viewMore=parentElement.querySelector('.control-view');
    const sectionContent=parentElement.querySelectorAll('.hobby');
   
    if (viewMore.classList.value.includes('view-more')){        
        sectionContent.forEach((element)=>{
            element.style.display='flex';
        })  
        viewMore.classList.remove('view-more');
        viewMore.classList.add('less-more');
        viewMore.innerHTML='Less more';
    } else{
        
        sectionContent.forEach((element)=>{
            element.style.display='none';
        })  
        viewMore.classList.remove('less-more');
        viewMore.classList.add('view-more');
        viewMore.innerHTML='View more';
    }
    
}
// view more and less more for language and skill
function handleViewMoreSkill(element)
{
    const parentElement=element.closest('.job-detail');
    const viewMore=parentElement.querySelector('.control-view');
    const sectionContent=parentElement.querySelectorAll('.job-info_title_child');
    
    if (viewMore.classList.value.includes('view-more')){        
        sectionContent.forEach((element)=>{
            element.style.display='block';
        })  
        viewMore.classList.remove('view-more');
        viewMore.classList.add('less-more');
        viewMore.innerHTML='Less more';
    } else{
        
        sectionContent.forEach((element)=>{
            element.style.display='none';
        })  
        viewMore.classList.remove('less-more');
        viewMore.classList.add('view-more');
        viewMore.innerHTML='View more';
    }
    
}
