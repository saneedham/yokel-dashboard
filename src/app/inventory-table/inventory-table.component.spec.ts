import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InventoryTableComponent } from './inventory-table.component';

describe('InventoryTableComponent', () => {
  let component: InventoryTableComponent;
  let fixture: ComponentFixture<InventoryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Inventory-Table create html structure', () => {
    /*
     * All tests that look for creation/initialisation of the html structure
     * should be put in this test group.
    */

    it(`should have a column with the heading 'Product name'`, async(() => {
      fixture = TestBed.createComponent(InventoryTableComponent);
      fixture.detectChanges();
      const el = fixture.debugElement.nativeElement;
      expect(el.querySelector('th[id="th.productName"]').textContent).toEqual('Product name');
    }));

    it(`should have a column with the heading 'Unit cost (£)'`, async(() => {
      fixture = TestBed.createComponent(InventoryTableComponent);
      fixture.detectChanges();
      const el = fixture.debugElement.nativeElement;
      expect(el.querySelector('th[id="th.unitCost"]').textContent).toEqual('Unit cost (£)');
    }));

    it(`should have a column with the heading 'Stock level'`, async(() => {
      fixture = TestBed.createComponent(InventoryTableComponent);
      fixture.detectChanges();
      const el = fixture.debugElement.nativeElement;
      expect(el.querySelector('th[id="th.stockLevel"]').textContent).toEqual('Stock level');
    }));

    it(`should have a column with the heading 'Stock value'`, async(() => {
      fixture = TestBed.createComponent(InventoryTableComponent);
      fixture.detectChanges();
      const el = fixture.debugElement.nativeElement;
      expect(el.querySelector('th[id="th.stockValue"]').textContent).toEqual('Stock value');
    }));

    it(`should have a column with the heading 'Actions'`, async(() => {
      fixture = TestBed.createComponent(InventoryTableComponent);
      fixture.detectChanges();
      const el = fixture.debugElement.nativeElement;
      expect(el.querySelector('th[id="th.actions"]').textContent).toEqual('Actions');
    }));

    it(`should have a column with the value 'Black Pepper Sausages'`, async(() => {
      const el = fixture.debugElement.nativeElement;
      expect(el.querySelector('td[id="td.product"]').textContent).toEqual('Black Pepper Sausages');
    }));

    it(`should have a column with the value '3.50'`, async(() => {
      const el = fixture.debugElement.nativeElement;
      expect(el.querySelector('td[id="td.cost"]').textContent).toEqual('3.50');
    }));

    it(`should have a column with the value '3'`, async(() => {
      const el = fixture.debugElement.nativeElement;
      expect(el.querySelector('td[id="td.stock"]').textContent).toEqual('3');
    }));

    it(`should have a column with the value '10.50'`, async (() => {
      const el = fixture.debugElement.nativeElement;
      expect(el.querySelector('td[id="td.value"]').textContent).toEqual('10.50');
    }));

    it(`should have a table row with the id 'a2b3e4f5g2h1`, async(() => {
      const el = fixture.debugElement.nativeElement;
      expect(el.querySelector('tr[id="tr.productRow"]')._id).toEqual('a2b3e4f5g2h1');
    }));

    it(`should have a button (btn.edit) with the prompt 'Edit stock level'`, async (() => {
      const el = fixture.debugElement.nativeElement;
      expect(el.querySelector('button[id="btn.edit"]').textContent).toEqual('Edit stock level');
    }));

    it(`should have a button (btn.save) with the prompt 'Save'`, async(() => {
      const el = fixture.debugElement.nativeElement;
      expect(el.querySelector('button[id="btn.save"]').textContent).toEqual('Save');
    }));

    it(`should have a button (btn.cancel) with the prompt 'Cancel'`, async(() => {
      const el = fixture.debugElement.nativeElement;
      expect(el.querySelector('button[id="btn.cancel"]').textContent).toEqual('Cancel');
    }));
  });

  describe('Inventory-Table - editStockClick()', async () => {

    /*
     * All tests that look at the functionality of the editStockClick()
     * method should go in this test group.
    */

    it(`should call editStockClick()`, async (() => {
      spyOn(component, 'editStockClick');
      component.editStockClick();
      expect(component.editStockClick).toHaveBeenCalled();
    }));

    it(`should call editStockClick() and make stock column editable`, async(() => {
      component.editStockClick();
      const el = fixture.debugElement.nativeElement;
      expect(el.querySelector(`td[id="td.stock"]`).contentEditable).toBeTruthy();
    }));

    it(`should call editStockClick() and make btn.cancel visible`, async(() => {
      component.editStockClick();
      const el = fixture.debugElement.nativeElement;
      expect(el.querySelector('button[id="btn.cancel"]').hidden).toBeFalsy();
    }));

    it(`should call editStockClick() and make btn.save visible`, async(() => {
      component.editStockClick();
      const el = fixture.debugElement.nativeElement;
      expect(el.querySelector('button[id="btn.save"]').hidden).toBeFalsy();
    }));

    it(`should call editStockClick() and make btn.edit hidden`, async(() => {
      component.editStockClick();
      const el = fixture.debugElement.nativeElement;
      expect(el.querySelector['button[id="btn.edit"]'].hidden).toBeTruthy();
    }));
  });

  describe('Inventory-Table - saveStockClick()', async () => {

    /*
    * All tests that look at the functionality of the saveStockClick()
    * method should go in this test group.
    */
  });

  describe('Inventory-Table - cancelChanges()', async () => {

    /*
     * All tests that look at the functionality of the cancelChanges()
      * method should go in this test group.
    */

    it(`should call cancelChanges()`, async(() => {
      spyOn(component, 'cancelChanges');
      component.cancelChanges();
      expect(component.cancelChanges).toHaveBeenCalled();
    }));

    it(`should call cancelChanges() and display a modal warning dialog`, async(() => {
     component.editStockClick();
     const el = fixture.debugElement.nativeElement;
     el.querySelector('td[id="id.stock"]').textContent = 4;
     component.cancelChanges();
     expect(el.querySelector['div[id="modal.warning"]']).toHaveClass('Show');
    }));
  });

  describe('Inventory-Table - goBack()', async () => {

    /*
     * All tests that look at the functionality of the goBack()
     * method should go in this test group.
    */

   it(`should call goBack()`, async(() => {
    spyOn(component, 'goBack');
    component.goBack();
    expect(component.goBack).toHaveBeenCalled();
  }));

   it(`should call goBack() and close the modal warning dialog`, async(() => {
    component.editStockClick();
    const el = fixture.debugElement.nativeElement;
    el.querySelector('td[id="td.stock"]').textContent = 4;
    component.cancelChanges();
    component.goBack();
    expect(el.querySelector('div[id="warningModal"]')).not.toHaveClass('Show');
  }));

   it(`should call goBack() and keep the value of stock the same`, async(() => {
    component.editStockClick();
    const el = fixture.debugElement.nativeElement;
    el.querySelector('td[id="td.stock"]').textContent = 4;
    component.cancelChanges();
    component.goBack();
    expect(el.querySelector('td[id="td.stock"]').textContent).toEqual('4');
    }));
  });

  describe('Inventory-Table - cancelConfirm()', async () => {

    /*
     * All tests that look at the functionality of the cancelConfirm()
     * method should go in this test group.
    */

    it(`should call cancelConfirm()`, async(() => {
      spyOn(component, 'cancelConfirm');
      component.cancelConfirm();
      expect(component.cancelConfirm).toHaveBeenCalled();
    }));

    it(`should call cancelConfirm() and close the modal warning dialog`, async(() => {
      component.editStockClick();
      const el = fixture.debugElement.nativeElement;
      const originalValue = el.querySelector('td[id="td.stock"]').textContent;
      el.querySelector('td[id="td.stock"]').TextContent = 4;
      component.cancelChanges();
      component.cancelConfirm();
      expect(el.querySelector('td[id="td.stock"]').textContent).toEqual(originalValue);
    }));

    it(`should call cancelConfirm() and make td.stock uneditable`, async(() => {
      component.editStockClick();
      component.cancelChanges();
      component.cancelConfirm();
      const el = fixture.debugElement.nativeElement;
      expect(el.querySelector('td[id="td.stock"]').contentEditable).toBeFalsy();
    }));

  });

});
