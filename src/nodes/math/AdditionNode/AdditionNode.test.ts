import { Context } from '../../../core';
import { AdditionNode } from './AdditionNode';

describe('Addition Node', () => {
    test('Should compute values correctly', () => {
        const ctx: Context = new Context();

        const nodeA = new AdditionNode(ctx);

        nodeA.inputPorts.a.value = 100;
        nodeA.inputPorts.b.value = 100;

        expect(nodeA.outputPorts.result.value).toBe(100 + 100);
    });

    test('Should pass validation when given numbers as inputs', () => {
        const ctx: Context = new Context();
        const node = new AdditionNode(ctx);

        Object.values(node.inputPorts).forEach(ip => {
            expect(ip.validate(100)).toBeTruthy();
        });
    });

    test('Should fail validation when given non-numbers as inputs', () => {
        const ctx: Context = new Context();
        const node = new AdditionNode(ctx);

        Object.values(node.inputPorts).forEach(ip => {
            expect(ip.validate('test')).toBeFalsy();
            expect(ip.validate(false)).toBeFalsy();
            expect(ip.validate([100])).toBeFalsy();
            expect(ip.validate({ test: 100 })).toBeFalsy();
        });
    });
});
