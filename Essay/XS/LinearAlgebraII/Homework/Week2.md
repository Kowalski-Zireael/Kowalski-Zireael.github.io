*11612733 杜子豪*

* **2.A——**

* 1.

  For $\forall v\in V​$, since $v_1,v_2,v_3,v_4​$ spans $V​$, $\exist a_1,a_2,a_3,a_4\in\mathrm{F}​$ s.t. $v=a_1v_1+a_2v_2+a_3v_3+a_4v_4​$

  $\Rightarrow v=a_1(v_1-v_2)+(a_1+a_2)(v_2-v_3)+(a_1+a_2+a_3)(v_3-v_4)+(a_1+a_2+a_3+a_4)v4$

  Thus $v_1-v_2,v_2-v_3,v_3-v_4,v_4$ also spans $V$

  

* 2.

  * a.

    Proof “$\Rightarrow$”:

    ​	Since $v\in V$ is linearly independent, if $v=0,\forall a\not=0,av=0$ which contradicts to the independence

    ​	Hence, $v\not=0$

    Proof “$\Leftarrow$”:

    ​	Since $v\not=0$, $av=0$ iff $a=0$

    ​	Hence $v​$ is linearly independent

  * b.

    Let $v,w\in V$

    Proof “$\Rightarrow$”:

    ​	Since $v,w​$ are linearly independent

    ​	Assume $v=kw​$

    ​	we can get $v+-kw=0$ which contradicts to the independence

    ​	Hence, neither vector is a scalar multiple of the other

    Proof “$\Leftarrow$”:

    ​	Since neither vector is a scalar multiple of the other

    ​	Assume $\exist a_1,a_2$ not all 0 s.t. $a_1v+a_2w=0$ 

    ​	Let $a_1\not=0,v=-\frac{a_2}{a_1}w$ which contradicts to the assumption

    ​	Hence only to make $a_1v+a_2w=0$ is to make $a_1=a_2=0$, which implies $v,w$ are linearly independent

  * c.

    $a(1,0,0,0)+b(0,1,0,0)+c(0,0,1,0)=0\Rightarrow (a,b,c,0)=(0,0,0,0)$

    Hence they are linearly independent

  * d.

    $a_0+a_1z+a_2z^2+\cdot\cdot\cdot+a_mz^m\equiv0\Rightarrow a_0=a_1=\cdot\cdot\cdot=a_m$

    Hence they are linearly independent

  

* 4.

  If $c=8$, $2(2,3,1)+3(1,-1,2)+(-1)(7,3,8)=(0,0,0)$, which implies they are dependent

  If they are independent, $a(2,3,1)+b(1,-1,2)+d(7,3,c)=0$

  ​	$\Rightarrow 2a+b+7d=0,3a-b+3d=0,a+2b+cd=0$

  ​	The equation has a solution iff $c=8$

  Hence we complete the proof

  

* 5.

  * a.

    Suppose $a,b\in\R,a(1+i)+b(1-i)=0$

    $\Rightarrow a+b=0,a-b=0$

    Hence $a=b=0$ which implies list $(1+i,1-i)$ is linearly independent

  * b.

    $i(1+i)+1(1-i)=0$

    Hence list $(1+i,1-i)$ is linearly dependent

    

* 6.

  If $\exist a_1,a_2,a_3,a_4$ not all 0, s.t. $a_1(v_1-v_2)+a_2(v_2-v_3)+a_3(v_3-v_4)+a_4v_4=0​$

  $a_1+(a_2-a_1)v_2+(a_3-a_2)v_3+(a_4-a_3)v_4=0$

  which contradicts to the independence.

  Hence to make $a_1(v_1-v_2)+a_2(v_2-v_3)+a_3(v_3-v_4)+a_4v_4=0$, only to make $a_1=a_2=a_3=a_4=0$

  which implies they are linearly independent

  

* 9.

  $(1,0),(0,1)$ and $(-1,0),(0,-1)$ are linearly independent lists

  However $(1,0)+(-1,0),(0,1)+(0,-1)$ is the list $(0,0),(0,0)$ which is not linearly independent

  

* 10.

  Since $v_1+w,...,v_m+w$ is linearly dependent,

  $\exist a_1,a_2,...,a_m$ not all 0, s.t. $a_1(v_1+w)+\cdot\cdot\cdot+a_m(v_m+w)=0$

  $\Rightarrow a_1v_1+\cdot\cdot\cdot+a_mv_m=(a_1+\cdot\cdot\cdot+a_m)w$

  Since $v_1,...,v_m$ is linearly independent

  $a_1v_1+\cdot\cdot\cdot+a_mv_m\not=0$ That is $(a_1+\cdot\cdot\cdot+a_m)\not=0$

  $w=\frac{a_1}{a}v_1+\cdot\cdot\cdot+\frac{a_m}{a}$ where $a=a_1+\cdot\cdot\cdot+a_m$

  Hence $w=\mathrm{span}(v_1,...,v_m)$

  

* 11.

  Assume $w\notin\mathrm{span}(v_1,...,v_m)​$

  ​	If $v_1,...,v_m,w$ is linearly dependent, $w\in\mathrm{span}(v_1,...,v_m)$ which is contradictive

  ​	Hence, $v_1,...,v_m,w​$ is linearly independent

  Assume $v_1,...,v_m,w$ is linearly independent

  ​	If $w\in\mathrm{span}(v_1,...,v_m) $, $\exist a_1,...,a_m$ not all 0, s.t. $w=a_1v_1+\cdot\cdot\cdot+a_mv_m$

  ​	$a_1v_1+\cdot\cdot\cdot+a_mv_m-w=0$

  ​	which contradicts to the independence

  ​	Hence, $w\notin\mathrm{span}(v_1,...,v_m)$

  Here, we complete the proof.

  

* 12.

  The list $(1,z,z^2,z^3,z^4)$ can span $\mathcal{P}_4(\mathrm{F})​$ 

  By lemma, the length basis must less or equal the length of spanning list

  Thus the length of basis cannot be more than 5

  

* 13.

  The list $(1,z,z^2,z^3,z^4)$ can span $\mathcal{P}_4(\mathrm{F})$  and is linearly independent

  Hence it is a basis 

  By lemma, the length basis must less or equal the length of spanning list

  Thus the length of basis cannot be less than 5

  

* 14.

  Proof “$\Rightarrow $”:

  ​	For $m=1$, a vector $v_1$ is linearly independent is easy to find

  ​	For $m=k$, assume there is a list $(v_1,...,v_m)$ that is linearly independent

  ​	For $m=k+1$, since $V$ is infinite-dimensional, $v_1,...,v_m$ cannot span $V$

  ​	Thus we can find $v_{m+1}\notin\mathrm{span}(v_1,...,v_m)$

  ​	Hence $v_1,...,v_m,v_{m+1}$ is linearly independent 

  Proof “$\Leftarrow$”:

  ​	By definition, it is obvious

  

* **2.B——**

* 1.

  (The answer is $\{0\}$, but if it is, the basis can only be $v=0$. However if $v=0$, $v$ is not linearly independent)

  

* 2.

  * a.

    obvious

  * b.

    $(1,2),(3,5)$ is linearly independent

    $(x,y)=-(5x-3y)(1,2)+(2x-y)(3,5)​$

  * c.

    $(8.-3,0)$ cannot be expressed as $a(1,2,-4)+b(7,-5,6)$

  * d.

    $(4,13)=19(1,2)-5(3,5)$

  * e.

    $(1,1,0),(0,0,1)$ is obviously linearly independent

    $(x,x,y)=x(1,1,0)+y(0,0,1)$

  * f.

    $(1,-1,0),(1,0,-1)$ is obviously linearly independent

    $(-y-z,y,z)=-y(1,-1,0)-z(1,0,-1)$

  * g.

    obvious

    

* 4

  * a.

    $(1,6,0,0,0),(0,0,2,-1,0),(0,0,3,0,-1)​$

  * b.

    $(1,6,0,0,0),(0,0,2,-1,0),(0,0,3,0,-1),(0,1,0,0,0),(0,0,1,0,0)$ 

  * c.

    $W=\mathrm{span}[(0,1,0,0,0),(0,0,1,0,0)]$

    

* 7.

  Counterexample

  ​	Basis is $(1,0,0,0),(0,1,0,0),(0,0,1,0),(1,1,1,1)$

  ​	$U=\{(x,y,0,z)\}$

  

* 8.

  $\forall v\in V,\exist u\in U,w\in W$ s.t. $v=u+w$

  Since $u_1,...,u_m$ is a basis of $U$ and $w_1,...,w_n$ is a basis of $W$

  $v=a_1v_1+\cdot\cdot\cdot+a_mv_m+b_1w_1+\cdot\cdot\cdot+b_nw_n$

  Thus $u_1,...,u_m,w_1,...,w_n$ spans $V$

  $0=u+w$ implies $u=w=0$ which is $a_1v_1+\cdot\cdot\cdot+a_mv_m+b_1w_1+\cdot\cdot\cdot+b_nw_n=0$ only if $a's$ and $b's$ are all 0

  Thus $u_1,...,u_m,w_1,...w_n$ is linearly independent

  Hence it is a basis

  

* **2.C——**

* 1.

  Suppose $u_1,u_2,\cdots,u_n$ is a basis of $U$ and $n=\dim U$

  Then $u_1,u_2,\cdots,u_n$ is linearly independent list

  Since $n=\dim U=\dim V$, $u_1,u_2,\cdots,u_n$ is independent list with right length $\dim V$

  Hence $u_1,u_2,\cdots,u_n$ is a basis of $V$

  which implies that $U=V$

  

* 3.

  The dimension of subspace of $\R^3$ can only be $0,1,2,3$.

  Suppose $U$ is a subspace of $\R^3$

  * $\dim U=0:$ $U=\{0\}$ obviously

  * $\dim U=1:​$ $\forall u\in U,\;ku\in U​$

    Then $U$ is a line in $\R^3$

    Since $\{0\}\in U​$, $U​$ is a line through origin

  * $\dim U=2:$ $\exist \mathrm{basis}\,u_1,u_2\in\R^3$ s.t. $U=\{au_1+bu_2:a,b\in\R\}$

    Hence $U$ is a plane in $\R^3$

    Since $\{0\}\in U$, $U$ is a plane through origin

  * $\dim U=3:$ $U=\R^3$ obviously

    

* 4.

  * a.

    $(x-6),(x-6)x,(x-6)x^2,(x-6)x^3​$

  * b.

    $1,(x-6),(x-6)x,(x-6)x^2,(x-6)x^3$

  * c.

    Let $W=\{c:c\in\R\}$

    

* 7.

  * a.

    $1,(x-2)(x-5)(x-6),x(x-2)(x-5)(x-6)$

  * b.

    $1,x,x^2,(x-2)(x-5)(x-6),x(x-2)(x-5)(x-6)$

  * c.

    Let $W=\{a_1x+a_2x^2:a_1,a_2\in\R\}​$

    

* 8.

  * a.

    $5x^4-1,x^3,3x^2-1,x​$

  * b.

    $1,5x^4-1,x^3,3x^2-1,x​$

  * c.

    Let $W=\{c:c\in\R\}$

    

* 9.

  $v_k-v_1=(v_k+w)-(v_1+w)$ where $k=1,2,\cdots,m$

  Then $v_k-v_1\in\mathrm{span}(v_1+w,\cdots,v_m+w)$

  Since $v_2-v_1,\cdots,v_m-v_1$ is linearly independent

  which implie that $\dim\mathrm{span}(v_1+w,\cdots,v_m+w)\geq m-1$

  

* 13.

  $\dim(U+W)=\dim U+\dim W-\dim(U\cap W)=8-\dim(U\cap W)$

  Since $4\leq\dim(U+W)\leq6,\;2\leq\dim(U\cap W)\leq4$

  Thus we can find at least length 2 linearly independent list

  

* 15.

  Since $\dim V=n$, we can find a basis $v_1,v_2,\cdots,v_n$

  Thus to make $a_1v_1+\cdots+a_nv_n=0$ only to make $a_1=\cdots=a_n=0$

  Now, Let $U_k=\{kv_k:k\in\mathrm{F}\}$

  Thus $U_1+U_2+\cdots+U_n=V$

  Hence $V=U_1\oplus\cdots\oplus U_n$

  

* 17.

  Let $U_1=\{(x,0)\},U_2=\{(0,y)\},U_3=\{(z,z)\}$

  $\dim(U_1+U_2+U_3)=2$

  However, $\dim U_1+\dim U_2+\dim U_3-\dim(U_1\cap U_2)-\dim(U_1\cap U_3)-\dim(U_2\cap U_3)+\dim(U_1\cap U_2\cap U_3)$

  $=1+1+1-0-0-0+0=3$

  which shows the contradiction