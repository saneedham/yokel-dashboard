import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InventoryTableComponent } from './inventory-table.component';
import { By } from '@angular/platform-browser';

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
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('th[name="col1"]').textContent).toEqual('Product name');
  }));

  it(`should have a column with the heading 'Unit cost (£)'`, async(() => {
    fixture = TestBed.createComponent(InventoryTableComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('th[name="col2"]').textContent).toEqual('Unit cost (£)');
  }));

  it(`should have a column with the heading 'Stock level'`, async(() => {
    fixture = TestBed.createComponent(InventoryTableComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('th[name="col3"]').textContent).toEqual('Stock level');
  }));

  it(`should have a column with the heading 'Stock value'`, async(() => {
    fixture = TestBed.createComponent(InventoryTableComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('th[name="col4"]').textContent).toEqual('Stock value');
  }));

  it(`should have a column with the heading 'Actions'`, async(() => {
    fixture = TestBed.createComponent(InventoryTableComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('th[name="col5"]').textContent).toEqual('Actions');
  }));

});
