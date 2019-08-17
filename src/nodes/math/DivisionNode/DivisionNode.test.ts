import { Context } from '../../../core';
import { DivisionNode } from './DivisionNode';

describe('Division Node', () => {
    test('Should compute values correctly', () => {
        const ctx: Context = new Context();

        const nodeA = new DivisionNode(ctx);

        nodeA.inputPorts.a.value = 200;
        nodeA.inputPorts.b.value = 2;

        expect(nodeA.outputPorts.result.value).toBe(200 / 2);
    });

    test('Should pass validation when given numbers as inputs', () => {
        const ctx: Context = new Context();
        const node = new DivisionNode(ctx);

        Object.values(node.inputPorts).forEach(ip => {
            expect(ip.validate(100)).toBeTruthy();
        });
    });

    test('Should fail validation when given non-numbers as inputs', () => {
        const ctx: Context = new Context();
        const node = new DivisionNode(ctx);

        Object.values(node.inputPorts).forEach(ip => {
            expect(ip.validate('test')).toBeFalsy();
            expect(ip.validate(false)).toBeFalsy();
            expect(ip.validate([100])).toBeFalsy();
            expect(ip.validate({ test: 100 })).toBeFalsy();
        });
    });
});
