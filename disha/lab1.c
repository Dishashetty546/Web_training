#include <stdio.h>
#include <ctype.h>
#include <math.h>

#define MAX_SIZE 50

int stack[MAX_SIZE], top = -1;

void push(int elem) {
    if (top >= MAX_SIZE - 1) {
        printf("Stack Overflow\n");
        return;
    }
    stack[++top] = elem;
}

int pop() {
    if (top == -1) {
        printf("Stack Underflow\n");
        return -1;
    }
    return stack[top--];
}

int evaluatePostfix(char postfix[]) {
    int i = 0, op1, op2;
    char ch;
    while ((ch = postfix[i++]) != '\0') {
        if (isdigit(ch))
            push(ch - '0');
        else {
            op2 = pop();
            op1 = pop();
            if (op1 == -1 || op2 == -1) {
                printf("Invalid input\n");
                return -1;
            }
            switch (ch) {
                case '+':
                    push(op1 + op2);
                    break;
                case '-':
                    push(op1 - op2);
                    break;
                case '*':
                    push(op1 * op2);
                    break;
                case '/':
                    push(op1 / op2);
                    break;
                case '%':
                    push(op1 % op2);
                    break;
                case '^':
                    push(pow(op1, op2));
                    break;
                default:
                    printf("Invalid input\n");
                    return -1;
            }
        }
    }
    if (top != 0) {
        printf("Invalid input\n");
        return -1;
    }
    return pop();
}

int main() {
    char postfix[MAX_SIZE];
    printf("Enter the postfix expression:\n");
    scanf("%s", postfix);
    int result = evaluatePostfix(postfix);
    if (result != -1)
        printf("Result = %d\n", result);
    return 0;
}
