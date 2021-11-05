class Card {
   constructor(student) {
      this.student = student;
   }

   render = () => {
      let CardContainer = document.createElement("div");
      CardContainer.className = "card";

      CardContainer.innerHTML = `
      <div class="cardHeader">${this.student.course}</div>
      <div class="cardMain">
         <div class="cardInfo">
            <p>${this.student.name}</p>
            <p>${this.student.code}</p>
            <p>${this.student.participations}</p>
         </div>
         <div class="cardBtns">
            <button class="cardBtn cardBtn--delete">Eliminar</button>
            <button class="cardBtn cardBtn--add">+</button>
         </div>
      </div>
      `;

      const ButtonDelete = CardContainer.querySelector(".cardBtn--delete");
      ButtonDelete.addEventListener("click", () => {
         db.ref("student/" + this.student.id).remove();
      });

      const ButtonAdd = CardContainer.querySelector(".cardBtn--add");
      ButtonAdd.addEventListener("click", () => {
         db.ref("student/" + this.student.id + "/participations").set((this.student.participations += 1));
      });

      return CardContainer;
   };
}
