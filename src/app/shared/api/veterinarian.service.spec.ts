import { TestBed } from '@angular/core/testing';

import { VeterinarianService } from './veterinarian.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VeterinarianService', () => {
  let service: VeterinarianService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(VeterinarianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
