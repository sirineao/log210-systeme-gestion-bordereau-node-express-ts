import { Course } from '../../src/model/Course';
import type { CourseJSON } from '../../src/model';

describe('CourseTest', () => {
  
  it('get all', () => {
    let courses: CourseJSON[] = Course.all();
    expect(courses).toEqual( [{"id": "LOG121", "prealable": "none", "titre": "Conception orientée object"}, {"id": "LOG210", "prealable": "LOG121", "titre": "Analyse et conception de logiciels"}, {"id": "LOG240", "titre": "Test et maintenance"}, {"id": "LOG320", "prealable": "LOG121", "titre": "Structures de données et algorithmes"}, {"id": "LOG410", "prealable": "LOG240", "titre": "AAnalyse de besoins et spécifications"}, {"id": "LOG430", "prealable": "LOG210", "titre": "Architecture logicielle"}])
  });

});
