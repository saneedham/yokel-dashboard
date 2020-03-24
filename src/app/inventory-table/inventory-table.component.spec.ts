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

  it(`should have a column with the heading 'Product name'`, async(() => {
    fixture = TestBed.createComponent(InventoryTableComponent);
    fixture.detectChanges();
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector('th[name="col1"]').textContent).toEqual('Product name');
  }));

  it(`should have a column with the heading 'Unit cost (£)'`, async(() => {
    fixture = TestBed.createComponent(InventoryTableComponent);
    fixture.detectChanges();
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector('th[name="col2"]').textContent).toEqual('Unit cost (£)');
  }));

  it(`should have a column with the heading 'Stock level'`, async(() => {
    fixture = TestBed.createComponent(InventoryTableComponent);
    fixture.detectChanges();
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector('th[name="col3"]').textContent).toEqual('Stock level');
  }));

  it(`should have a column with the heading 'Stock value'`, async(() => {
    fixture = TestBed.createComponent(InventoryTableComponent);
    fixture.detectChanges();
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector('th[name="col4"]').textContent).toEqual('Stock value');
  }));

  it(`should have a column with the heading 'Actions'`, async(() => {
    fixture = TestBed.createComponent(InventoryTableComponent);
    fixture.detectChanges();
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector('th[name="col5"]').textContent).toEqual('Actions');
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a column with the value 'Black Pepper Sausages'`, async(() => {
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector('td[name="product"]').textContent).toEqual('Black Pepper Sausages');
  }));

  it(`should have a column with the value '3.50'`, async(() => {
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector('td[name="cost"]').textContent).toEqual('3.50');
  }));

  it(`should have a column with the value '3'`, async(() => {
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector('td[name="stock"]').textContent).toEqual('3');
  }));

  it(`should have a column with the value '10.50'`, async (() => {
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector('td[name="value"]').textContent).toEqual('10.50');
  }));

  it(`should have a table row with the id 'a2b3e4f5g2h1`, async(() => {
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector('tr').id).toEqual('a2b3e4f5g2h1');
  }));

  it(`should have a button with the prompt 'Edit stock level'`, async (() => {
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelectory('button[id="editsave"]').textContent).toEqual('Edit stock level');
  }));

  it(`should call editStockClick() and make stock column editable`, async(() => {
    fixture.editStockClick();
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector(`td[name="stock"]`).contentEditable).toBeTruthy();
  }));

  it(`should call editStockClick() and change the text of btn.editSave to 'Save'`, async(() => {
    fixture.editStockClick();
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector('button[id="editSave"]').textContent).toEqual('Save');
  }));

  it(`should call editStockClick() and change the class of the btn.editSave to btn-success`, async(() => {
    fixture.editStockClick();
    const el = fixture.debugElement.nativeElement;
    expect(el.querySeletor('button[id="editSave"]').class).toContain('btn-success');
  }));

  it (`should call editStockClick() and change the onclick call of btn.editSave to saveStockClick()`, async(() => {
    fixture.editStockClick();
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector('button[id="editSave"]').onclick).toEqual('saveStockClick');
  }));

  it(`should change the class of btn.editSave from btn-primary to btn-warning when the value of stock changes`, async(() => {
    fixture.editStockClick();
    const el = fixture.debugElement.nativeElement;
    el.querySelector('td[name="stock"]').textContent = 4;
    expect(el.querySelector('button[id="editSave"]').class).toContain('btn-warning');
  }));

  it(`should call editStockClick() and make btn.cancel visible`, async(() => {
    fixture.editStockClick();
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector('button[id="cancel"]').hidden).toBeFalsy();
  }));

  it(`should call saveStockClick() and change the class of btn.editSave to btn-primary`, async(() => {
    fixture.editStockClick()
    const el = fixture.debugElement.nativeElement;
    el.querySelector('td[name="stock"]').textContent = 4;
    fixture.saveStockClick()
    expect(el.querySelector('button[id="editSave"]').class).toContain('btn-primary');
  }));

  it(`should call saveStockClick() and change the text of btn.editSave to 'Edit'`, async(() => {
    fixture.editStockClick();
    fixture.savestockClick();
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector('button[id="editSave"]').textContent).toEqual('Edit');
  }));

  it(`should call saveStockClick() and hide btn.cancel`, async(() => {
    fixture.editStockClick();
    fixture.saveStockClick();
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector('button[id="cancel"]').hidden).toBeTruthy();
  }));

  it(`should call saveStockClick() and make td.stock uneditable`, async(() => {
    fixture.editStockClick();
    fixture.saveStockClick();
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector('td[name="stock"]').contentEditable).toBeFalsy();
  }));

  it(`should call cancelChanges() and display a modal warning dialog`, async(() => {
    fixture.editStockClick();
    const el = fixture.debugElement.nativeElement;
    el.querySelector('td[name="stock"]').textContent = 4;
    fixture.cancelChanges();
    expect(el.querySelector['div[id="warningModal"]']).toHaveClass('Show');
  }));

  it(`should call goBack() and close the modal warning dialog`, async(() => {
    fixture.editStockClick();
    const el = fixture.debugElement.nativeElement;
    el.querySelector('td[name="stock"]').textContent = 4;
    fixture.cancelChanges();
    fixture.goBack();
    expect(el.querySelector('div[id="warningModal"]')).not.toHaveClass('Show');
  }));

  it(`should call goBack() and keep the value of stock the same`, async(() => {
    fixture.editStockClick();
    const el = fixture.debugElement.nativeElement;
    el.querySelector('td[name="stock"]').textContent = 4;
    fixture.cancelChanges();
    fixture.goBack();
    expect(el.querySelector('td[name="stock"]').textContent).toEqual('4');
  }));

  it(`should call cancelConfirm() and close the modal warning dialog`, async(() => {
    fixture.editStockClick();
    const el = fixture.debugElement.nativeElement;
    const originalValue = el.querySelector('td[name="stock"]').textContent;
    el.querySelector('td[name="stock"]').TextContent = 4;
    fixture.cancelChanges();
    fixture.cancelConfirm();
    expect(el.querySelector('td[name="stock"]').textContent).toEqual(originalValue);
  }));

  it(`should call cancelConfirm() and make td.stock uneditable`, async(() => {
    fixture.editStockClick();
    fixture.cancelChanges();
    fixture.cancelConfirm();
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector('td[name="stock"]').contentEditable).toBeFalsy();
  }));

  it(`should call saveStockClick() and update the stock level in the database for this product`, async(() => {
    /*
    fixture.editStockClick();
    el.querySelector('td[name="stock"]').textContent = '4';
    fixture.saveStockClick(el.querySelector('tr').id);

    Test for success response from db server
    */
  }));

  it(`should call saveStockClick() and display an error if an error is returned by the db server`, async(() => {
/*
    fixture.editStockClick();
    el.querySelector('td[name="stock"]').textContent = '4';
    fixture.saveStockClick(el.querySelector('tr').id);

    Test for error response being displayed to user from db server
    */
  }));

  it(`should call saveStockClick() and update the td.value`, async(() => {
    fixture.editStockClick();
    const el = fixture.debugElement.nativeElement;
    el.querySelector('td[name="stock"]').textContent = 4;
    fixture.saveStockClick();
    expect(el.querySelector('td[name="value"]').textContent).toEqual(el.querySelector('td[name="stock"]').textContent * el.querySelector('td[name="cost"]').textContent)
  }))

});
