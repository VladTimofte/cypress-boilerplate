describe("Todo App", () => {
    beforeEach(() => {
      cy.visit("http://localhost:4200/");
    });
  
    it("ar trebui sa adauge un todo nou si sa sa verifice lungimea, valoarea si continutul textului", () => {
      cy.get('input[placeholder="Adaugă o sarcină nouă"]').type(
        "Sa ma uit la meci maine"
      );
      cy.get("button.add-task").click();
  
      cy.get("ul li").should("have.length", 1);
  
      cy.get('input[placeholder="Adaugă o sarcină nouă"]').should(
        "have.value",
        ""
      );
  
      cy.get("ul li span").should("contain.text", "Sa ma uit la meci maine");
    });
  
    it("Ar trebui sa marcheze un todo, ca fiind completat si sa verifice clasa si starea lui", () => {
      cy.get('input[placeholder="Adaugă o sarcină nouă"]').type("Ana are mere");
      cy.get("button.add-task").click();
  
      cy.get('input[type="checkbox"]').check();
  
      cy.get("span").should("have.class", "done");
    });
  
    it("ar trbeui sa stearga un todo si sa verifice ca nu mai exista.", () => {
      cy.get('input[placeholder="Adaugă o sarcină nouă"]').type(
        "Asta e un todo ce trebuie STERS"
      );
      cy.get("button.add-task").click();
  
      cy.get("button.remove-task").click();
      cy.get("ul li").should("not.exist");
    });
  
    it("Ar trebui sa stearga toate todo-urile si sa verifice ca nu exista", () => {
      cy.get('input[placeholder="Adaugă o sarcină nouă"]').type(
        "Asta e un todo ce trebuie STERS"
      );
      cy.get("button.add-task").click();
      cy.get('input[placeholder="Adaugă o sarcină nouă"]').type(
        "Asta e un alt todo ce trebuie STERS"
      );
      cy.get("button.add-task").click();
      cy.get("button.delete-all").click();
      cy.get("ul li").should("not.exist");
    });
  });
  