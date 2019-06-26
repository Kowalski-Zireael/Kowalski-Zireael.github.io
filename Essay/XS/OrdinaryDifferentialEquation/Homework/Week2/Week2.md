*11612733 杜子豪*

* **2.3——**

* 2.

  Suppose that the salt in tank is $y\;\mathrm{g}$

  Thus $y'=2\gamma-2\frac{y}{120}$, $y(0)=0$

  $y'=2\gamma-2\frac{y}{120}\Rightarrow y'=2\gamma-y/60\Rightarrow$

  $60y'=-y+120\gamma\Rightarrow60\frac{y'}{y-120\gamma}=-1\Rightarrow d(\ln|y-120\gamma|)=-\frac{1}{60}dt\Rightarrow$

  $y=\pm e^{-\frac{1}{60}t+C}+120\gamma=ce^{-\frac{1}{60}t}+120\gamma$ where $c$ is an arbitrary constant

  Substituting with $y(0)=0$, we get $c=-120\gamma$

  Hence $y=-120\gamma e^{-\frac{1}{60}t}+120\gamma$

  

* 6.

  * a.

    $S'=rS+k\Rightarrow$

    $dS/(S+\frac{k}{r})=rdt\Rightarrow d(\ln|S+\frac{k}{r}|)=rt\Rightarrow S=ce^{rt}-k/r$ where $c$ is an arbitrary constant

    Substitute with $S(0)=0$, and we get $c=k/r$

    Hence $S(t)=k(e^{rt}-1)/r$

  * b.

    Substitute with $r=7.5\%$ and $t=40$, $S(40)=k(e^{3}-1)/0.075$

    Solving $k(e^{30}-1)=75000$, we get $k\approx\$3929.68$

  * c.

    Substitute with $k=\$2000$ and $t=40$, $S(40)=2000(e^{40r}-1)/r$

    Solving $(e^{40r}-1)/r=500$, we get $r\approx9.8\%$

    

* 12.

  Suppose the temperature of coffee is $T$, and cooling rate is $r$

  Thus $T'=r(T-70)\Rightarrow d\ln(T-70)=rdt\Rightarrow T=e^{rt+c}+70$ where $c$ is an arbitrary constant

  Substitute $T(0)=200$, and we get $e^c=130$ thus $T=130e^{rt}+70$

  Substitute $T(1)=190$, and we get $r=\ln(12/13)$ thus $T=130e^{tln(12/13)}+70$

  Solving T(t)=150, we get $t\approx6.1\mathrm{s}$

  

* 20.

  * a.

    $v'=-g-kv/m\Rightarrow d\ln(v+mg/k)=-\frac{k}{m}dt\Rightarrow v(t)=ce^{-kt/m}-mg/k$

    Substitute $v(0)=v_0$, and we get $c=v_0+mg/k$

    Hence $v(t)=(v_0+mg/k)e^{-kt/m}-mg/k​$

  * b.

    if $k\to0$, $v(t)\to v_0-gt$

    which satisfies the case in a vacuum

  * c.

    if $m\to0$, $v(t)\to0$

    

* 21.

  * a.

    The volumn of the spherical body is $V=\frac{4}{3}\pi a^3$

    Thus $B=\frac{4}{3}\pi\rho' a^3g$, $m=\frac{4}{3}\pi\rho a^3g$, $$

  * b.

  * 

    

* **2.6——**

* 1.

  $\partial(2x+3)/\partial y=0,\partial(2y-2)/\partial x=0​$

  Hence this equation is exact

  $\int(2x+3)dx=x^2+3x+g(y)=\int(2y-2)dy=y^2-2y+h(x)$

  Hence, let $\phi(x,y)=x^2+3x+y^2-2y​$, $d\phi=0​$

  We get $x^2+3x+y^2-2y=c​$ where $c​$ is an arbitrary constant

  

* 3.

  $\partial(3x^2-2xy+2)/\partial y=2x,\partial(6y^2-x^2+3)/\partial x=2x$

  Hence this equation is exact

  $\int(3x^2-2xy+2)dx=x^3-x^2y+2x+g(y)=\int(6y^2-x^2+3)dy=2y^3-x^2y+3y+h(x)$

  Hence, let $\phi(x,y)=x^3+2x-x^2y+2y^3+3y,\;d\phi=0$

  We get $x^3+2x-x^2y+2y^3+3y=c$ where c is an arbitrary constant

  

* 5.

  $\partial(ax-by)/\partial y=-b,\;\partial(bx-cy)/\partial x=b$

  Hence this equation is exact iff $b=0$

  When $b=0$, $cydy=axdx$

  $\frac12cy^2-\frac12ax^2=c$ where $c$ is an arbitrary constant

  

* 7.

  $\partial(\frac yx+6x)/\partial y=\frac 1x,\;\partial(\ln x-2)/\partial x=\frac 1x$

  Hence this equation is exact

  $\int(\frac yx+6x)dx=y\ln x+3x^2+g(y)=\int(\ln x-2)dy=y\ln x-2y+h(x)$

  Hence, let $\phi(x,y)=y\ln x+3x^2-2y,\;d\phi=0$

  $y\ln x+3x^2-2y=c$ where $c$ is an arbitrary constant

  

* 11.

  $\partial(xy^2+bx^2y)/\partial y=2xy+bx^2,\;\partial(x^3+x^2y)/\partial x=3x^2+2xy$

  Hence this equation is exact iff $b=3$

  When $b=3$

  $\int(xy^2+3x^2y)dx=\frac12x^2y^2+x^3y+g(y)=\int(x^3+x^2y)dy=x^3y+\frac12x^2y^2+h(x)$

  Hence, let $\phi(x,y)=x^3y+\frac12x^2y^2,\;d\phi=0$

  $x^3y+\frac12x^2y^2=c​$ where $c​$ is an arbitrary constant

  

* 14.

  $dM(x)/dy=0=dN(y)/dx$

  Hence this equation is exact

  

* 15.

  $\partial(x^2y^3)/\partial y=3x^2y^2,\;\partial(x+xy^2)/\partial x=1+2xy$

  Hence it is not exact

  When multiplied by $\frac1{xy^3}$

  $\partial x/\partial y=0,\;\partial(\frac1{y^3}+\frac1y)/\partial x=0$

  This time it is exact

  $\int xdx=\frac12x^2+g(y)=\int(\frac1{y^3}+\frac1y)dy=-\frac12y^{-2}+\ln |y|+h(x)$

  Hence, let $\phi(x,y)=\frac12x^2-\frac12y^{-2}+\ln|y|,\;d\phi=0$

  We get $\frac12x^2-\frac12y^{-2}+\ln|y|=c$ where $c$ is an arbitrary constant

  

* 18.

  Let $M(x,y)=3x^2y+2xy+y^3,\;N(x,y)=x^2+y^2$

  Suppose $\exist\mu(x)​$ s.t. $(\mu M)_y=(\mu N)_x\Rightarrow\mu M_y=\mu_xN+\mu N_x\Rightarrow\mu(M_y-N_x)/N=\mu'​$

  $(M_y-N_x)/N=(3x^2+2x+3y^2-2x)/(x^2+y^2)=3\Rightarrow3dx=d\mu/\mu$

  Thus we can let $\mu(x)=e^{3x}$

  $\int\mu(x) M(x,y)dx=x^2ye^{3x}+\frac13y^3e^{3x}+g(x)=\int\mu(x)N(x,y)dy=x^2ye^{3x}=\frac13y^3e^{3x}+h(x)$

  Hence, let $\phi(x,y)=e^{3x}(x^2y+\frac13y^3),\;d\phi=0$

  We get $e^{3x}(x^2y+\frac13y^3)=c$ where $c$ is an arbitrary constant

  

* 19.

  Let $M(x,y)=e^{2x}+y-1,\;N(x,y)=-1$

  From problem 18, we get $\mu(M_y-N_x)/N=\mu'$

  Thus $(M_y-N_x)/N=(1-0)/-1=-1\Rightarrow-dx=d\mu/\mu$

  We can let $\mu(x)=e^{-x}$

  $\int\mu(x)M(x,y)dx=e^x+(1-y)e^{-x}+g(y)=\int\mu(x)N(x,y)=-ye^{-x}+h(x)$

  Hence, let $\phi(x,y)=e^x+(1-y)e^{-x},\;d\phi=0$

  We get $e^x+(1-y)e^{-x}=c\Rightarrow y=e^{2x}-ce^x+1$ where $c$ is an arbitrary constant

  

* 20.

  Let $M(x,y)=1,\;N(x,y)=\frac xy-\sin y$

  Suppose $\exist\mu(y)​$ s.t. $(\mu M)_y=(\mu N)_x\Rightarrow\mu_yM+\mu M_y=\mu N_x\Rightarrow\mu(N_x-M_y)/M=\mu'​$$

  Thus $(N_x-M_y)/M=(\frac1y-0)/1=\frac1y\Rightarrow dy/y=d\mu/\mu$

  We can let $\mu(y)=y​$

  $\int\mu(y)M(x,y)dx=xy+g(y)=\int\mu(y)N(x,y)dy=xy+y\cos y-\sin y+h(x)$

  Hence, let $\phi(x,y)=xy+y\cos y-\sin y,\;d\phi=0$

  We get $xy+y\cos y-\sin y=c$ where $c$ is an arbitrary constant