import { Injectable } from '@nestjs/common';
import { DashboardDto } from 'src/common/dashboard/dtos/dashboard.dto';
import { IDashboardStartAndEndDate } from 'src/common/dashboard/interfaces/dashboard.interface';
import { IDashboardService } from 'src/common/dashboard/interfaces/dashboard.service.interface';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
import { HelperNumberService } from 'src/common/helper/services/helper.number.service';

@Injectable()
export class DashboardService implements IDashboardService {
    constructor(
        private readonly helperDateService: HelperDateService,
        private readonly helperNumberService: HelperNumberService
    ) {}

    getStartAndEndDate(date?: DashboardDto): IDashboardStartAndEndDate {
        const today = this.helperDateService.create();

        if (!date) {
            const startDate = this.helperDateService.startOfMonth(today);
            const endDate = this.helperDateService.endOfMonth(today);

            return {
                startDate,
                endDate,
            };
        }
        let { startDate, endDate } = date;

        if (!startDate) {
            startDate = this.helperDateService.startOfMonth();
        } else {
            startDate = this.helperDateService.startOfDay(startDate);
        }

        if (!endDate) {
            endDate = this.helperDateService.endOfMonth();
        } else {
            endDate = this.helperDateService.endOfDay(endDate);
        }

        return {
            startDate,
            endDate,
        };
    }

    getPercentage(value: number, total: number): number {
        return this.helperNumberService.percent(value, total);
    }
}
