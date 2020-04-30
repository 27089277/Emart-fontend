import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductManageraddComponent } from './product-manageradd.component';

describe('ProductManageraddComponent', () => {
  let component: ProductManageraddComponent;
  let fixture: ComponentFixture<ProductManageraddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductManageraddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductManageraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
