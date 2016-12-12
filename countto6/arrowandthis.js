 var foot = {
     kick: () => {
         this.yelp = "Ouch!";
         setImmediate(() => {
             console.log(this.yelp);
         });
     }
 };
 foot.kick();


 //Official

 
 var foot = {
     kick: function () {
         this.yelp = "Ouch!";
         setImmediate(() => console.log(this.yelp));
     }
 };
 foot.kick();