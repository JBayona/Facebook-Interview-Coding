/*

https://www.hackerrank.com/challenges/ctci-find-the-running-median/copy-from/52703266

*/

/*
The median of a dataset of integers is the midpoint value of the dataset for which an equal number of integers are less than 
and greater than the value. To find the median, you must first sort your dataset of integers in non-decreasing order, then:

If your dataset contains an odd number of elements, the median is the middle element of the sorted sample. In the sorted 
dataset ,  is the median.
If your dataset contains an even number of elements, the median is the average of the two middle elements of the sorted sample. 
In the sorted dataset ,  is the median.
Given an input stream of  integers, you must perform the following task for each  integer:

Add the  integer to a running list of integers.
Find the median of the updated list (i.e., for the first element through the  element).
Print the list's updated median on a new line. The printed value must be a double-precision number 
scaled to decimal place (i.e.,  format).
Input Format

The first line contains a single integer, , denoting the number of integers in the data stream. 
Each line  of the  subsequent lines contains an integer, , to be added to your list.
*/

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {
    
    public static void printPriorityQueue(PriorityQueue<Integer> prq){
        // create iterator from the queue
       Iterator it = prq.iterator();
       System.out.println ( "Priority queue values are: ");
       while (it.hasNext()){
        System.out.println ( "Value: "+ it.next()); 
       }
    }
    
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        boolean even = true;
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((x, y) -> y - x); //Valores menores y me retorna el mayor con peek
        PriorityQueue<Integer> minHeap = new PriorityQueue<>(); //Valores mayores y me retorna el menor con peek
        int n = in.nextInt();
        int[] a = new int[n];
        for(int a_i=0; a_i < n; a_i++){
            a[a_i] = in.nextInt();
        }
        for(int i = 0; i < a.length; i++){
            /*minHeap es el arbol en donde su root es el menor y todos sus hijos
            tienen valores mayores, los valores de minHeap son mayores a los de maxHeap*/
            if(even){
                /*En cada operación debemos insertar en el que no le toca y limpiar*/
                /*De esta manera nos aseuramos que esté balanceado, cuando es par, la
                mediana solo es el peek de maxHeap*/
                minHeap.add(a[i]);
                int min = minHeap.poll();
                maxHeap.add(min);
                double ans = maxHeap.peek();
                System.out.println((double)(ans));
                even = false;
            }else{
                /*maxHeap es el arbol en donde su root es el mayor y todos sus hijos
                tienen valores menores, maxHeap tienen valores menores a los de maxHeap*/
                /*Cuando es impar sabemos que los dos heaps tienen el mismo tamanio y solo
                sacamos el promedio del pick de los dos*/
                maxHeap.add(a[i]);
                int max = maxHeap.poll();
                minHeap.add(max);
                double ans = (double)(minHeap.peek() + maxHeap.peek())/2;
                System.out.println(ans);
                even = true;
            }
        }
    }
}
