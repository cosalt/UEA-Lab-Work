.data # this .data section is where you can simulate stored data in random access memory 

	array: .word 5, 2, 6, 7, 1 # you can write any label which ends in a colon such as 'array:' <- PUT YOUR STUDENT NUMBERS HERE
	length: .word 5 # <--- THIS IS THE NUMBER OF ELEMENTS IN THE ARRAY
	
	
.text #this section is where you write your main script

	main:
		la $t0, array # la is load address base address  <---- loads the base ADDRESS of the array into $t0
		li $t1, 0     # i=0 
		lw $t2, length #store length 5 into $t2
		li $t3, 0 #sum = 0
 		
############### COMPLETE YOUR CODE BELOW THIS LINE #######			
		
		lw $s0, 0($t0) # load memory into registers
		lw $s1, 4($t0)
		lw $s2, 8($t0)
		lw $s3, 12($t0)
		lw $s4, 16($t0)
		
		add $t3, $t3, $s0 # adding all the array values into $t3 - sum 
		add $t3, $t3, $s1
		add $t3, $t3, $s2
		add $t3, $t3, $s3
		add $t3, $t3, $s4
		
		div $s5, $t3, $t2
		mflo $s5 # whole number
		# mfhi $s6 # remainder
		
		# min
		
		move $s6, $s0
		slt $t6, $s1, $s6
		beq $t6, $zero, skip1
		
		
		
		
				

################COMPLETE YOUR CODE ABOVE THIS LINE #######
		
		
		#terminate program 
		li $v0 10     #### THIS IS A GOOD WAY TO END THE PROGRAM BY PUTTING THE VALUE 10 INTO $v0 AND USING SYSCALL
		syscall
