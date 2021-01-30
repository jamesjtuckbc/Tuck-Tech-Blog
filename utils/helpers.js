module.exports = {
    formatDate: (date) =>{
        const formatted = 
          date.getFullYear()
          +'-'+date.getMonth()+1
          +'-'+date.getDate();
        
        return formatted;  
      }
};