*11612733 杜子豪*

* **6.A——**

* 1.

  $\langle(1+(-2),1),(2,-1)\rangle=|-2|+|-1|=3\not=7$

  which is $|2|+|-1|+|-4|=\langle(1,1),(2,-1)\rangle+\langle(-2,0),(2,-1)\rangle$

  Addictivity in first slot doesn’t hold

  Hence it is not an inner product

  

* 2.

  $\langle(0,1,0),(0,1,0)\rangle=0​$ however $(0,1,0)\not=0​$

  Hence it is not aninner product

  

* 4.

  * a.

    $\langle u+v,u-v\rangle=\|u\|^2+\langle v,u\rangle-\langle u,v\rangle-\|v\|^2$

    Since $V$ is a real space, $\langle u,v\rangle=\langle v,u\rangle$

    Hence $\langle u+v,u-v\rangle=\|u\|^2-\|v\|^2$

  * b.

    If $\|u\|=\|v\|$, $\langle u+v,u-v\rangle=0$

    Hence $u+v$ is orthogonal to $u-v$

  * c.

    Suppose quadrangle ABCD is a rhombus

    $\vec{AB}+\vec{BC}=\vec{AC},\;\vec{AB}-\vec{BC}=\vec{AB}+\vec{DA}=\vec{DB}$

    Hence $\langle \vec{AC},\vec{DB}\rangle=0$, which implies that the diagonals are perpendicular to each other

    

* 6.

  If $\langle u,v\rangle=0$, then $\|u+av\|^2=\|u\|^2+\|av\|^2\geq\|u\|^2$

  If $\|u+av\|\geq\|u\|$ for all $a\in\mathrm{F}$

  ​	$\|u+av\|^2-\|u\|^2=|a|^2\|v\|+a\langle v,u\rangle+\overline{a}\langle u,v\rangle\geq0$

  ​	Let $a=-\langle u,v\rangle$, we get $-|\langle u,v\rangle|^2\geq0$

  ​	Thus $\langle u,v\rangle=0$

  

* 7.

  If $\|av+bu\|=\|au+bv\|$ for all $a,b\in\R$

  ​	Let $a=1,\;b=0$, we get $\|u\|=\|v\|$

  If $\|u\|=\|v\|$

  ​	$\|au+bv\|^2=a^2\|u\|^2+ab(\langle u,v\rangle+\langle v,u\rangle)+b^2\|v\|^2$

     $=a^2\|v\|^2+ab(\langle u,v\rangle+\langle v,u\rangle)+b^2\|u\|^2=\|av+bu\|^2$

  

* 10.

  Suppose $v=(x,y),\;u=k(1,3)$

  Since $u\perp v$, we get $(x,y)\cdot(1,3)=0=x+3y$

  Also $v+u=(x+k,y+3k)=(1,2)$

  Hence $x=\frac 3{10},\;y=-\frac1{10},\;k=\frac7{10}​$

  We get $v=(\frac3{10},-\frac1{10}),\;u=(\frac7{10},\frac{21}{10})$

  

* 11.

  $(\sqrt{a}\cdot\frac1{\sqrt{a}}+\cdots+\sqrt{d}\cdot\frac1{\sqrt{d}})^2=16\leq(\sqrt{a}^2+\cdots+\sqrt{d}^2)(\frac1{\sqrt{a}^2}+\cdots+\frac1{\sqrt{d}^2})=(a+\cdots+d)(\frac1a+\cdots+\frac1d)$

  

* 15.

  Let $x=(\sqrt 1a_1,...,\sqrt na_n),\;y=(b_1/\sqrt1,..,b_n/\sqrt n)$

  Since $x\cdot y\leq\|x\|\cdot\|y\|$, substituting the above euqation, we can complete the proof

  

* 16.

  $\|u+v\|^2+\|u-v\|^2=2\|u\|^2+2\|v\|^2=18+2\|v\|^2=52$

  Hence $\|v\|=\sqrt{17}$

  

* 19.

  $\|u+v\|^2-\|u-v\|^2=2(\langle u,v\rangle+\langle v,u\rangle)$

  Since $V$ is real space, $\langle u,v\rangle=\overline{\langle v,u\rangle}=\langle v,u\rangle$

  $\frac{\|u+v\|^2-\|u-v\|^2}4=\langle u,v\rangle$

  

* 20.

  $\|u+v\|^2-\|u-v\|^2+\|u+iv\|^2i-\|u-iv\|^2i=2(\langle u,v\rangle+\langle v,u\rangle)+2i(\langle u,iv\rangle+\langle iv,u\rangle)$

  $=2(\langle u,v\rangle+\langle v,u\rangle+\langle u,v\rangle-\langle v,u\rangle)=4\langle u,v\rangle$

  

* 24.

  Positivity

  ​	$\langle u,u\rangle_1=\langle Su,Su\rangle\geq0​$

  Definiteness

  ​	$\langle v,v\rangle_1=\langle Sv,Sv\rangle=0$ iff $Sv=0$ since $S$ is injective $Sv=0$ iff $v=0$

  Additivity in first slot

  ​	$\langle u+w,v\rangle_1=\langle S(u+w),Sv\rangle=\langle Su,Sv\rangle+\langle Sw,Sv\rangle=\langle u,v\rangle+\langle w,v\rangle$

  Homogeneity in first slot

  ​	$\langle\lambda u,v\rangle_1=\langle S(\lambda u),Sv\rangle=\langle\lambda Su,Sv\rangle=\lambda\langle Su,Sv\rangle=\lambda\langle u,v\rangle_1$

  Conjugate symmetry

  ​	$\langle u,v\rangle_1=\langle Su,Sv\rangle=\overline{\langle Sv,Su\rangle}=\overline{\langle v,u\rangle}_1$

  

* 25.

  If $S$ is not injective, $\exist v\in V$ s.t. $v\not=0,\;Sv=0$

  Hence $\langle v,v\rangle_1=\langle Sv,Sv\rangle=0$

  Thus the difiniteness doesn’t hold

  

* **6.B——**

* 4.

  $\langle \frac1{\sqrt{2\pi}},\frac1{\sqrt{2\pi}}\rangle=1$, $\langle \frac{\cos kx}{\sqrt\pi},\frac{\cos kx}{\sqrt\pi}\rangle=\frac1\pi\int_{-\pi}^{\pi}\cos^2kxdx=\frac1\pi\int_{-\pi}^{\pi}\frac{\cos 2kx+1}2dx=1$

  Similarly $\langle\frac{\sin kx}{\sqrt\pi},\frac{\sin kx}{\sqrt\pi}\rangle=1$

  Thus each vector in the list has norm 1

  $\langle\frac1{\sqrt{2\pi}},\frac{\cos kx}{\sqrt\pi}\rangle=\frac1{\sqrt2\pi}\int_{-\pi}^{\pi}\cos kxdx=0​$

  $\langle\frac1{\sqrt{2\pi}},\frac{\sin kx}{\sqrt\pi}\rangle=\frac1{\sqrt2\pi}\int_{-\pi}^{\pi}\sin kxdx=0$

  $\langle\frac{\sin kx}{\sqrt{\pi}},\frac{\cos kx}{\sqrt\pi}\rangle=\frac1{\pi}\int_{-\pi}^{\pi}\cos kx\sin kxdx=\frac1{2\pi}\int_{-\pi}^{\pi}\sin2kxdx=0$

  Hence any two vector of the list are orthogonal

  Hence it is an orthonormal list

  

* 5.

  $\langle1,1\rangle=1$, hence $e_1=1$

  $x-\langle1,x\rangle1=x-\frac12,\;\|x-\frac12\|^2=\frac1{12}$, hence $e_2=\sqrt3(2x-1)$

  $x^2-\langle1,x^2\rangle1-\langle \sqrt3(2x-1),x^2\rangle\sqrt3(2x-1)=x^2-\frac13-(x-\frac12)=x^2-x+\frac16$

  $\langle x^2-x+\frac16,x^2-x+\frac16\rangle=\frac1{180}$, hence $e_3=\sqrt5(6x^2-6x+1)$

  

* 6.

  Suppose $D$ is a differentiation operator.

  Since with respect to the basis $1,x,x^2$, $\mathcal{M}(D)$ is an upper-triangular matrix.

  $D(1)\in span(1), D(x)\in span(1,x),D(x^2)\in span(1,x,x^2)$

  Let $e_1=1,e_2=\sqrt3(2x-1),e_3=\sqrt5(6x^2-6x+1)​$

  Since $e_1\in span(1),e_2\in span(1,x),e_3\in span(1,x,x^2)​$

  $D(e_1)=\lambda D(1)\in span(e_1)$

  $D(e_2)=\lambda D(1)+\mu D(x)\in span(1,x)=span(e_1,e_2)$

  $D(e_3)=\lambda D(1)+\mu D(x)+\varphi D(x^2)\in span(1,x,x^2)=span(e_1,e_2,e_3)$

  Hence with respect to $e_1,e_2,e_3$, $\mathcal{M}(D)$ is also an upper-triangular matrix

  

* 8.

  Let $\varphi(p)=\int_0^1p(x)(\cos\pi x)dx$ 

  Suppose $1,\sqrt3(2x-1),\sqrt5(6x^2-6x+1)$ is an orthonormal basis and denote it as $e_1,e_2,e_3$

  Define $q=\overline{\varphi(e_1)e_1}+\cdots+\overline{\varphi(e_3)e_3}$

  Hence $\varphi(p)=\varphi(\langle p,e_1\rangle e_1+\cdots+\langle p,e_3\rangle e_3)=\langle p,q\rangle$

  We get $q=\frac1{\pi^2}(12-24x)$

  

* 9.

  Suppose $v_1,...,v_n$ is linearly dependent list

  Suppose $v_1,...,v_{k-1}$ is linearly independent and $v_k=span(v_1,...,v_{k-1})$

  Since $v_1,...,v_{k-1}$ is linearly independent, they can be transformed into $e_1,...,e_{k-1}$

  $v_k=\langle v_k,e_1\rangle e_1+\cdots+\langle v_k,e_{k-1}\rangle v_{k-1}$

  Hence $v_k-\langle v_k,e_1\rangle e_1-\cdots-\langle v_k,e_{k-1}\rangle e_{k-1}=0$

  which makes the construction by Gram-Schmidt fail

  

* 14.

  $\|e_j-v_j\|^2=1+\|v_j\|^2-\langle e_j,v_j\rangle-\langle v_j,e_j\rangle<\frac1n$

  Suppose $v_1,...,v_n$ is linearly dependent

  Thus $\exist a_1,...,a_n$ not all $0$ s.t. $a_1v_1+\cdots+a_nv_n=0$

  Hence $a_1(e_1-v_1)+\cdots+a_n(e_n-v_n)=a_1e_1+\cdots+a_ne_n$

  $\sqrt{a_1^2+\cdots+a_n^2}=\|a_1e_1+\cdots+a_ne_n\|$

  $=\|a_1(e_1-v_1)+\cdots+a_n(e_n-v_n)\|\leq|a_1|\|e_1-v_1\|+\cdots+|a_n|\|e_n-v_n\|$

  $<\frac{|a_1|+\cdots+|a_n|}{\sqrt{n}}$

  However $\sqrt\frac{\sum |a_i|^2}{n}\geq\frac{\sum|a_i|}n$

  Hence $a_1=\cdots=a_n=0$ which implies $v_1,...,v_n$ is a linearly independent list with right length

  Thus it is a basis