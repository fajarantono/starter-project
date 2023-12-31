import { faker } from '@faker-js/faker';

export const DashboardDocQueryStartDate = [
    {
        name: 'startDate',
        allowEmptyValue: true,
        required: false,
        type: 'string',
        example: faker.date.past(),
    },
];

export const DashboardDocQueryEndDate = [
    {
        name: 'endDate',
        allowEmptyValue: true,
        required: false,
        type: 'string',
        example: faker.date.recent(),
    },
];
