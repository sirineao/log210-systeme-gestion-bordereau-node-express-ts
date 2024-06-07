import { ScheduleController } from '../../src/controller/ScheduleController';
import type { ScheduleJSON } from "../../src/model";

describe('ScheduleControllerTest', () => {
  
  it('get all schedules', () => {
    let controller: ScheduleController = new ScheduleController();
    let schedules:ScheduleJSON[] = controller.all();
    expect(schedules).toEqual(    [{"activity": "C", "day": "Mer", "group_id": "S20213-LOG121-01", "hours": "08:30-12:00", "local": "D-4012", "mode": "P", "teacher_id": ""}, {"activity": "Labo", "day": "Jeu", "group_id": "S20213-LOG121-01", "hours": "13:30-16:30", "local": "A-3220", "mode": "P", "teacher_id": ""}, {"activity": "C", "day": "Jeu", "group_id": "S20213-LOG121-02", "hours": "13:30-17:00", "local": "D-4012", "mode": "P", "teacher_id": "cc-vincent.lacasse@etsmtl.ca"}, {"activity": "Labo", "day": "Lun", "group_id": "S20213-LOG121-02", "hours": "08:30-11:30", "local": "A-3230", "mode": "P", "teacher_id": ""}, {"activity": "C", "day": "Mer", "group_id": "S20213-LOG121-04", "hours": "18:00-21:30", "local": "", "mode": "D", "teacher_id": ""}, {"activity": "Labo", "day": "Mar", "group_id": "S20213-LOG121-04", "hours": "18:00-21:00", "local": "", "mode": "D", "teacher_id": ""}, {"activity": "C", "day": "Lun", "group_id": "S20213-LOG210-01", "hours": "08:30-12:00", "local": "", "mode": "D", "teacher_id": "cc-yvan.ross@etsmtl.ca"}, {"activity": "Labo", "day": "Mar", "group_id": "S20213-LOG210-01", "hours": "13:30-16:30", "local": "A-3326", "mode": "D", "teacher_id": ""}, {"activity": "C", "day": "Mar", "group_id": "S20213-LOG210-02", "hours": "13:30-17:00", "local": "E-2023", "mode": "P", "teacher_id": "cc-yvan.ross@etsmtl.ca"}, {"activity": "Labo", "day": "Lun", "group_id": "S20213-LOG210-02", "hours": "08:30-11:30", "local": "A-3450", "mode": "P", "teacher_id": ""}, {"activity": "C", "day": "Mar", "group_id": "S20213-LOG210-03", "hours": "08:30-12:00", "local": "D-5025", "mode": "P", "teacher_id": "cc-yvan.ross@etsmtl.ca"}, {"activity": "Labo", "day": "Ven", "group_id": "S20213-LOG210-03", "hours": "13:30-16:30", "local": "A-3322", "mode": "P", "teacher_id": ""}, {"activity": "C", "day": "Jeu", "group_id": "S20213-LOG240-01", "hours": "08:30-12:00", "local": "A-1302", "mode": "P", "teacher_id": "francis.cardinal@etsmtl.ca"}, {"activity": "Labo A", "day": "Mer", "group_id": "S20213-LOG240-01", "hours": "08:30-10:30", "local": "A-3322", "mode": "P", "teacher_id": ""}, {"activity": "Labo B", "day": "Mer", "group_id": "S20213-LOG240-01", "hours": "10:30-12:30", "local": "A-3322", "mode": "P", "teacher_id": ""}, {"activity": "C", "day": "Lun", "group_id": "S20213-LOG240-02", "hours": "18:00-21:30", "local": "", "mode": "D", "teacher_id": "francis.cardinal@etsmtl.ca"}, {"activity": "Labo A", "day": "Jeu", "group_id": "S20213-LOG240-02", "hours": "18:00-20:00", "local": "", "mode": "D", "teacher_id": ""}, {"activity": "Labo B", "day": "Jeu", "group_id": "S20213-LOG240-02", "hours": "18:00-20:00", "local": "", "mode": "D", "teacher_id": ""}, {"activity": "C", "day": "Mer", "group_id": "S20213-LOG240-03", "hours": "13:30-17:00", "local": "B-3432", "mode": "P", "teacher_id": "francis.cardinal@etsmtl.ca"}, {"activity": "Labo A", "day": "Jeu", "group_id": "S20213-LOG240-03", "hours": "08:30-10:30", "local": "A-3322", "mode": "P", "teacher_id": ""}, {"activity": "Labo B", "day": "Jeu", "group_id": "S20213-LOG240-03", "hours": "10:30-12:30", "local": "A-3322", "mode": "P", "teacher_id": ""}, {"activity": "C", "day": "Mar", "group_id": "S20213-LOG320-01", "hours": "13:30-17:00", "local": "E-4026", "mode": "P", "teacher_id": "pierre.dumouchel@etsmtl.ca"}, {"activity": "Labo A", "day": "Lun", "group_id": "S20213-LOG320-01", "hours": "13:30-16:30", "local": "A-3412", "mode": "P", "teacher_id": ""}, {"activity": "Labo B", "day": "Lun", "group_id": "S20213-LOG320-01", "hours": "13:30-16:30", "local": "A-3446", "mode": "P", "teacher_id": ""}, {"activity": "C", "day": "Lun", "group_id": "S20213-LOG320-02", "hours": "18:00-21:30", "local": "", "mode": "D", "teacher_id": "pierre.dumouchel@etsmtl.ca"}, {"activity": "Labo A", "day": "Mar", "group_id": "S20213-LOG320-02", "hours": "18:00-21:00", "local": "A-3412", "mode": "D", "teacher_id": ""}, {"activity": "Labo B", "day": "Mar", "group_id": "S20213-LOG320-02", "hours": "18:00-21:00", "local": "A-3446", "mode": "D", "teacher_id": ""}, {"activity": "C", "day": "Mar", "group_id": "S20213-LOG320-04", "hours": "18:00-21:30", "local": "", "mode": "D", "teacher_id": "francis.cardinal@etsmtl.ca"}, {"activity": "Labo A", "day": "Lun", "group_id": "S20213-LOG320-04", "hours": "18:30-21:00", "local": "", "mode": "D", "teacher_id": ""}, {"activity": "C", "day": "Mar", "group_id": "S20213-LOG410-01", "hours": "08:30-12:00", "local": "E-4026", "mode": "P", "teacher_id": "cc-patrick.tremblay@etsmtl.ca"}, {"activity": "Labo A", "day": "Jeu", "group_id": "S20213-LOG410-01", "hours": "13:30-15:30", "local": "A-3412", "mode": "P", "teacher_id": ""}, {"activity": "Labo B", "day": "Jeu", "group_id": "S20213-LOG410-01", "hours": "115:30-12:3", "local": "A-3412", "mode": "P", "teacher_id": ""}, {"activity": "C", "day": "Mer", "group_id": "S20213-LOG410-02", "hours": "18:00-21:30", "local": "", "mode": "D", "teacher_id": "yves.durocher@etsmtl.ca"}, {"activity": "Labo A", "day": "jeu", "group_id": "S20213-LOG410-02", "hours": "18:00-20:00", "local": "A-3326", "mode": "D", "teacher_id": ""}, {"activity": "Labo B", "day": "Jeu", "group_id": "S20213-LOG410-02", "hours": "18:00-20:00", "local": "A-3446", "mode": "D", "teacher_id": ""}, {"activity": "C", "day": "Mer", "group_id": "S20213-LOG430-01", "hours": "08:30-12:00", "local": "E-2025", "mode": "P", "teacher_id": "cc-yvan.ross@etsmtl.ca"}, {"activity": "Labo A", "day": "Lun", "group_id": "S20213-LOG430-01", "hours": "08:30-11:30", "local": "A-3322", "mode": "P", "teacher_id": ""}, {"activity": "Labo B", "day": "Mer", "group_id": "S20213-LOG430-01", "hours": "08:30-11:30", "local": "A-3450", "mode": "P", "teacher_id": ""}, {"activity": "C", "day": "Jeu", "group_id": "S20213-LOG430-02", "hours": "18:00-21:30", "local": "", "mode": "D", "teacher_id": "cc-patrick.tremblay@etsmtl.ca"}, {"activity": "Labo A", "day": "Mar", "group_id": "S20213-LOG430-02", "hours": "18:00-21:00", "local": "A-3322", "mode": "D", "teacher_id": ""}, {"activity": "Labo B", "day": "Mar", "group_id": "S20213-LOG430-02", "hours": "18:00-21:00", "local": "A-3450", "mode": "D", "teacher_id": ""}])
  })
    
});
