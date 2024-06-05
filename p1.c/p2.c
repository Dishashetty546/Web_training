#include<stdio.h>
#include<stdlib.h>

int a[10], i, j, n;
int frequency[10] = {0};

void getdata();
void printdata();
void makefrequency();
void makehistogram();

int main() {
    getdata();
    printdata();
    makefrequency();
    makehistogram();
    return 0;
}

void getdata() {
    printf("Enter the number of data in the array: ");
    scanf("%d", &n);
    
    if(n <= 0) {
        printf("Array is empty\n");
        exit(0);
    }
    
    printf("Enter %d elements in the array: ", n);
    
    for(i = 0; i < n; i++) {
        scanf("%d", &a[i]);
    }
}

void printdata() {
    printf("Array elements are:\n");
    for(i = 0; i < n; i++) {
        printf("%d\t", a[i]);
    }
    printf("\n");
}

void makefrequency() {
    for(i = 0; i < 10; i++) {
        for(j = 0; j < n; j++) {
            if(a[j] == i) {
                frequency[i]++;
            }
        }
    }
}

void makehistogram() {
    printf("Frequency histogram:\n");
    for(i = 0; i < 10; i++) {
        printf("%d ", i);
        for(j = 0; j < frequency[i]; j++) {
            printf("*");
        }
        printf("\n");
    }
}
